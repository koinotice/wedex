"use strict";
exports.__esModule = true;
// Taken and modified from
// https://github.com/iden3/circomlib
var bitstream_1 = require("./bitstream");
var createBlakeHash = require("blake-hash");
var bigInt = require("snarkjs").bigInt;
var babyJub = require("./babyjub");
var poseidon = require("./poseidon");
var EdDSA = /** @class */ (function () {
    function EdDSA() {
    }
    EdDSA.generateKeyPair = function (seed) {
        var randomNumber = bitstream_1.Bitstream.hashCode(seed);
        var secretKey = bigInt(randomNumber.toString(10));
        secretKey = secretKey.mod(babyJub.subOrder);
        var publicKey = babyJub.mulPointEscalar(babyJub.Base8, secretKey);
        var keyPair = {
            publicKeyX: publicKey[0].toString(10),
            publicKeyY: publicKey[1].toString(10),
            secretKey: secretKey.toString(10)
        };
        return keyPair;
    };
    EdDSA.sign = function (strKey, msg) {
        var key = bigInt(strKey);
        var prv = bigInt.leInt2Buff(key, 32);
        var h1 = createBlakeHash("blake512")
            .update(prv)
            .digest();
        var msgBuff = bigInt.leInt2Buff(bigInt(msg), 32);
        var rBuff = createBlakeHash("blake512")
            .update(Buffer.concat([h1.slice(32, 64), msgBuff]))
            .digest();
        var r = bigInt.leBuff2int(rBuff);
        r = r.mod(babyJub.subOrder);
        var A = babyJub.mulPointEscalar(babyJub.Base8, key);
        var R8 = babyJub.mulPointEscalar(babyJub.Base8, r);
        var hasher = poseidon.createHash(6, 6, 52);
        var hm = hasher([R8[0], R8[1], A[0], A[1], msg]);
        var S = r.add(hm.mul(key)).mod(babyJub.subOrder);
        var signature = {
            Rx: R8[0].toString(),
            Ry: R8[1].toString(),
            s: S.toString()
        };
        return signature;
    };
    EdDSA.verify = function (msg, sig, pubKey) {
        var A = [bigInt(pubKey[0]), bigInt(pubKey[1])];
        var R = [bigInt(sig.Rx), bigInt(sig.Ry)];
        var S = bigInt(sig.s);
        // Check parameters
        if (!babyJub.inCurve(R))
            return false;
        if (!babyJub.inCurve(A))
            return false;
        if (S >= babyJub.subOrder)
            return false;
        var hasher = poseidon.createHash(6, 6, 52);
        var hm = hasher([R[0], R[1], A[0], A[1], bigInt(msg)]);
        var Pleft = babyJub.mulPointEscalar(babyJub.Base8, S);
        var Pright = babyJub.mulPointEscalar(A, hm);
        Pright = babyJub.addPoint(R, Pright);
        if (!Pleft[0].equals(Pright[0]))
            return false;
        if (!Pleft[1].equals(Pright[1]))
            return false;
        return true;
    };
    return EdDSA;
}());
exports.EdDSA = EdDSA;

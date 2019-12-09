"use strict";
// Taken from
// https://github.com/iden3/circomlib
exports.__esModule = true;
var bn128 = require("snarkjs").bn128;
var bigInt = require("snarkjs").bigInt;
var blake2b = require("blake2b");
var assert = require("assert");
var F = bn128.Fr;
var SEED = "poseidon";
var NROUNDSF = 8;
var NROUNDSP = 57;
var T = 6;
function getPseudoRandom(seed, n) {
    var res = [];
    var input = Buffer.from(seed);
    var h = blake2b(32)
        .update(input)
        .digest();
    while (res.length < n) {
        var n_1 = F.affine(bigInt.leBuff2int(h));
        res.push(n_1);
        h = blake2b(32)
            .update(h)
            .digest();
    }
    return res;
}
function allDifferent(v) {
    for (var i = 0; i < v.length; i++) {
        if (v[i].isZero())
            return false;
        for (var j = i + 1; j < v.length; j++) {
            if (v[i].equals(v[j]))
                return false;
        }
    }
    return true;
}
function getMatrix(t, seed, nRounds) {
    if (typeof seed === "undefined")
        seed = SEED;
    if (typeof nRounds === "undefined")
        nRounds = NROUNDSF + NROUNDSP;
    if (typeof t === "undefined")
        t = T;
    var nonce = "0000";
    var cmatrix = getPseudoRandom(seed + "_matrix_" + nonce, t * 2);
    while (!allDifferent(cmatrix)) {
        nonce = Number(nonce) + 1 + "";
        while (nonce.length < 4)
            nonce = "0" + nonce;
        cmatrix = getPseudoRandom(seed + "_matrix_" + nonce, t * 2);
    }
    var M = new Array(t);
    for (var i = 0; i < t; i++) {
        M[i] = new Array(t);
        for (var j = 0; j < t; j++) {
            M[i][j] = F.affine(F.inverse(F.sub(cmatrix[i], cmatrix[t + j])));
        }
    }
    return M;
}
exports.getMatrix = getMatrix;
function getConstants(t, seed, nRounds) {
    if (typeof seed === "undefined")
        seed = SEED;
    if (typeof nRounds === "undefined")
        nRounds = NROUNDSF + NROUNDSP;
    if (typeof t === "undefined")
        t = T;
    return getPseudoRandom(seed + "_constants", nRounds);
}
exports.getConstants = getConstants;
function ark(state, c) {
    for (var j = 0; j < state.length; j++) {
        state[j] = F.add(state[j], c);
    }
}
function sigma(a) {
    return F.mul(a, F.square(F.square(a, a)));
}
function mix(state, M) {
    var newState = new Array(state.length);
    for (var i = 0; i < state.length; i++) {
        newState[i] = F.zero;
        for (var j = 0; j < state.length; j++) {
            newState[i] = F.add(newState[i], F.mul(M[i][j], state[j]));
        }
    }
    for (var i = 0; i < state.length; i++)
        state[i] = newState[i];
}
function createHash(t, nRoundsF, nRoundsP, seed) {
    if (typeof seed === "undefined")
        seed = SEED;
    if (typeof nRoundsF === "undefined")
        nRoundsF = NROUNDSF;
    if (typeof nRoundsP === "undefined")
        nRoundsP = NROUNDSP;
    if (typeof t === "undefined")
        t = T;
    assert(nRoundsF % 2 == 0);
    var C = exports.getConstants(t, seed, nRoundsF + nRoundsP);
    var M = exports.getMatrix(t, seed, nRoundsF + nRoundsP);
    return function (inputs) {
        var state = [];
        assert(inputs.length < t);
        assert(inputs.length > 0);
        for (var i = 0; i < inputs.length; i++)
            state[i] = bigInt(inputs[i]);
        for (var i = inputs.length; i < t; i++)
            state[i] = F.zero;
        for (var i = 0; i < nRoundsF + nRoundsP; i++) {
            ark(state, C[i]);
            if (i < nRoundsF / 2 || i >= nRoundsF / 2 + nRoundsP) {
                for (var j = 0; j < t; j++)
                    state[j] = sigma(state[j]);
            }
            else {
                state[0] = sigma(state[0]);
            }
            mix(state, M);
        }
        return F.affine(state[0]);
    };
}
exports.createHash = createHash;

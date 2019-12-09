"use strict";
exports.__esModule = true;
var bip39_1 = require("bip39");
var hdkey_1 = require("hdkey");
/**
 * Decrypt mnemonic into ethereum private key
 * @param mnemonic string
 * @param password string
 * @param dpath string
 */
function mnemonictoPrivatekey(mnemonic, dpath, password) {
    if (dpath) {
        mnemonic = mnemonic.trim();
        if (!bip39_1.validateMnemonic(mnemonic)) {
            throw new Error("Invalid mnemonic");
        }
        var seed = bip39_1.mnemonicToSeed(mnemonic, password);
        var derived = hdkey_1.fromMasterSeed(seed).derive(dpath);
        return derived.privateKey;
    }
    else {
        throw new Error("dpath can't be null");
    }
}
exports.mnemonictoPrivatekey = mnemonictoPrivatekey;
/**
 * Valid mnemonic
 * @param phrase string
 * @returns {bool}
 */
function isValidateMnemonic(phrase) {
    return bip39_1.validateMnemonic(phrase);
}
exports.isValidateMnemonic = isValidateMnemonic;

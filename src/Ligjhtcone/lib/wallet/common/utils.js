"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var ethereumjs_util_1 = require("ethereumjs-util");
var formatter_1 = require("./formatter");
/**
 * trim head space and tail space
 * @param str string
 */
function trim(str) {
    return str.replace(/(^\s+)|(\s+$)/g, "");
}
exports.trim = trim;
/**
 * trim all spaces
 * @param str
 */
function trimAll(str) {
    return trim(str).replace(/\s/g, "");
}
exports.trimAll = trimAll;
function keccakHash(str) {
    return formatter_1.toHex(ethereumjs_util_1.keccak(str));
}
exports.keccakHash = keccakHash;
function calculateGas(gasPrice, gasLimit) {
    return formatter_1.toBig(gasPrice)
        .times(gasLimit)
        .div(1e9);
}
exports.calculateGas = calculateGas;
exports["default"] = __assign(__assign({ hashPersonalMessage: ethereumjs_util_1.hashPersonalMessage }, formatter_1["default"]), { trim: trim,
    trimAll: trimAll,
    keccakHash: keccakHash,
    calculateGas: calculateGas });

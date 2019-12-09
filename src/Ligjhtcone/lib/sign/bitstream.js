"use strict";
exports.__esModule = true;
var bignumber_js_1 = require("bignumber.js");
var bn_js_1 = require("bn.js");
var assert = require("assert");
var abi = require("ethereumjs-abi");
var Bitstream = /** @class */ (function () {
    function Bitstream(initialData) {
        if (initialData === void 0) { initialData = ""; }
        this.data = initialData;
        if (this.data.startsWith("0x")) {
            this.data = this.data.slice(2);
        }
    }
    Bitstream.prototype.getData = function () {
        if (this.data.length === 0) {
            return "0x";
        }
        else {
            return "0x" + this.data;
        }
    };
    Bitstream.prototype.getBytes32Array = function () {
        if (this.data.length === 0) {
            return [];
        }
        else {
            assert.equal(this.length() % 32, 0, "Bitstream not compatible with bytes32[]");
            return this.data.match(/.{1,64}/g).map(function (element) { return "0x" + element; });
        }
    };
    Bitstream.prototype.addBigNumber = function (x, numBytes) {
        if (numBytes === void 0) { numBytes = 32; }
        var formattedData = this.padString(x.toString(16), numBytes * 2);
        return this.insert(formattedData);
    };
    Bitstream.prototype.addBN = function (x, numBytes) {
        if (numBytes === void 0) { numBytes = 32; }
        var formattedData = this.padString(x.toString(16), numBytes * 2);
        return this.insert(formattedData);
    };
    Bitstream.prototype.addNumber = function (x, numBytes) {
        if (numBytes === void 0) { numBytes = 4; }
        // Check if we need to encode this number as negative
        if (x < 0) {
            var encoded = abi.rawEncode(["int256"], [x.toString(10)]);
            var hex = encoded.toString("hex").slice(-(numBytes * 2));
            return this.addHex(hex);
        }
        else {
            return this.addBigNumber(new bignumber_js_1.BigNumber(x), numBytes);
        }
    };
    Bitstream.prototype.addAddress = function (x, numBytes) {
        if (numBytes === void 0) { numBytes = 20; }
        var formattedData = this.padString(x.slice(2), numBytes * 2);
        return this.insert(formattedData);
    };
    Bitstream.prototype.addHex = function (x) {
        if (x.startsWith("0x")) {
            return this.insert(x.slice(2));
        }
        else {
            return this.insert(x);
        }
    };
    Bitstream.prototype.extractUint8 = function (offset) {
        return parseInt(this.extractData(offset, 1), 16);
    };
    Bitstream.prototype.extractUint16 = function (offset) {
        return parseInt(this.extractData(offset, 2), 16);
    };
    Bitstream.prototype.extractUint24 = function (offset) {
        return parseInt(this.extractData(offset, 3), 16);
    };
    Bitstream.prototype.extractUint32 = function (offset) {
        return parseInt(this.extractData(offset, 4), 16);
    };
    Bitstream.prototype.extractUint40 = function (offset) {
        return parseInt(this.extractData(offset, 5), 16);
    };
    Bitstream.prototype.extractUint48 = function (offset) {
        return parseInt(this.extractData(offset, 6), 16);
    };
    Bitstream.prototype.extractUint56 = function (offset) {
        return new bn_js_1["default"](this.extractData(offset, 7), 16);
    };
    Bitstream.prototype.extractUint64 = function (offset) {
        return new bn_js_1["default"](this.extractData(offset, 8), 16);
    };
    Bitstream.prototype.extractUint = function (offset) {
        return new bn_js_1["default"](this.extractData(offset, 32), 16);
    };
    Bitstream.prototype.extractAddress = function (offset) {
        return "0x" + this.extractData(offset, 20);
    };
    Bitstream.prototype.extractBytes1 = function (offset) {
        return this.extractBytesX(offset, 1);
    };
    Bitstream.prototype.extractBytes32 = function (offset) {
        return this.extractBytesX(offset, 32);
    };
    Bitstream.prototype.extractBytesX = function (offset, length) {
        return new Buffer(this.extractData(offset, length), "hex");
    };
    Bitstream.prototype.extractChar = function (offset) {
        return this.extractData(offset, 1);
    };
    Bitstream.prototype.extractData = function (offset, length) {
        var start = offset * 2;
        var end = start + length * 2;
        if (this.data.length < end) {
            throw new Error("substring index out of range:[" + start + ", " + end + "]");
        }
        return this.data.slice(start, end);
    };
    // Returns the number of bytes of data
    Bitstream.prototype.length = function () {
        return this.data.length / 2;
    };
    Bitstream.hashCode = function (s) {
        for (var i = 0, h = 0; i < s.length; i++)
            h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
        return Math.abs(h);
    };
    Bitstream.prototype.insert = function (x) {
        var offset = this.length();
        this.data += x;
        return offset;
    };
    Bitstream.prototype.padString = function (x, targetLength) {
        if (x.length > targetLength) {
            throw Error("0x" +
                x +
                " is too big to fit in the requested length (" +
                targetLength +
                ")");
        }
        while (x.length < targetLength) {
            x = "0" + x;
        }
        return x;
    };
    return Bitstream;
}());
exports.Bitstream = Bitstream;

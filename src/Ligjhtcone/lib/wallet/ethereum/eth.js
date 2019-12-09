"use strict";
exports.__esModule = true;
var validator_1 = require("./validator");
var request_1 = require("../common/request");
var response_1 = require("../common/response");
var code_1 = require("../common/code");
var Eth = /** @class */ (function () {
    function Eth(host) {
        this.host = host;
    }
    Eth.prototype.getTransactionCount = function (_a) {
        var address = _a.address, tag = _a.tag;
        return getTransactionCount(this.host, { address: address, tag: tag });
    };
    Eth.prototype.sendRawTransaction = function (signedTx) {
        return sendRawTransaction(this.host, signedTx);
    };
    Eth.prototype.getGasPrice = function () {
        return getGasPrice(this.host);
    };
    Eth.prototype.estimateGas = function (tx) {
        return estimateGas(this.host, tx);
    };
    Eth.prototype.getAccountBalance = function (_a) {
        var address = _a.address, tag = _a.tag;
        return getAccountBalance(this.host, { address: address, tag: tag });
    };
    Eth.prototype.getTransactionByhash = function (txHash) {
        return getTransactionByhash(this.host, txHash);
    };
    Eth.prototype.call = function (_a) {
        var tx = _a.tx, tag = _a.tag;
        return call(this.host, { tx: tx, tag: tag });
    };
    return Eth;
}());
exports["default"] = Eth;
/**
 * @description Returns the number of transactions sent from an address.
 * @param host
 * @param address
 * @param tag
 * @returns {Promise}
 */
function getTransactionCount(host, _a) {
    var address = _a.address, tag = _a.tag;
    tag = tag || "pending";
    try {
        validator_1["default"].validate({ value: address, type: "ETH_ADDRESS" });
        validator_1["default"].validate({ value: tag, type: "RPC_TAG" });
    }
    catch (e) {
        return Promise.resolve(new response_1["default"](code_1["default"].PARAM_INVALID.code, code_1["default"].PARAM_INVALID.msg));
    }
    var params = [address, tag];
    var body = {};
    body["method"] = "eth_getTransactionCount";
    body["params"] = params;
    body["id"] = request_1.id();
    body["jsonrpc"] = "2.0";
    return request_1["default"](host, {
        method: "post",
        body: body
    });
}
exports.getTransactionCount = getTransactionCount;
/**
 * @description Sends signed ethereum tx
 * @param host
 * @param signedTx
 * @returns {Promise}
 */
function sendRawTransaction(host, signedTx) {
    var body = {};
    body["method"] = "eth_sendRawTransaction";
    body["params"] = [signedTx];
    body["id"] = request_1.id();
    body["jsonrpc"] = "2.0";
    return request_1["default"](host, {
        method: "post",
        body: body
    });
}
exports.sendRawTransaction = sendRawTransaction;
/**
 * @description Returns the current price per gas in wei.
 * @param host
 * @returns {Promise}
 */
function getGasPrice(host) {
    var params = [];
    var body = {};
    body["method"] = "eth_gasPrice";
    body["params"] = params;
    body["id"] = request_1.id();
    body["jsonrpc"] = "2.0";
    return request_1["default"](host, {
        method: "post",
        body: body
    });
}
exports.getGasPrice = getGasPrice;
/**
 * @description Generates and returns an estimate of how much gas is necessary to allow the transaction to complete.
 * @param host
 * @param tx
 * @returns {Promise}
 */
function estimateGas(host, tx) {
    var body = {};
    body["method"] = "eth_estimateGas";
    body["params"] = [tx];
    body["id"] = request_1.id();
    body["jsonrpc"] = "2.0";
    return request_1["default"](host, {
        method: "post",
        body: body
    });
}
exports.estimateGas = estimateGas;
/**
 * @description Returns the ethereum balance of the account of given address.
 * @param host
 * @param address
 * @param tag
 * @returns {Promise}
 */
function getAccountBalance(host, _a) {
    var address = _a.address, tag = _a.tag;
    tag = tag || "latest";
    if (tag) {
        try {
            validator_1["default"].validate({ value: tag, type: "RPC_TAG" });
            validator_1["default"].validate({ value: address, type: "ETH_ADDRESS" });
        }
        catch (e) {
            return Promise.resolve(new response_1["default"](code_1["default"].PARAM_INVALID.code, code_1["default"].PARAM_INVALID.msg));
        }
    }
    var params = [address, tag];
    var body = {};
    body["method"] = "eth_getBalance";
    body["params"] = params;
    body["id"] = request_1.id();
    body["jsonrpc"] = "2.0";
    return request_1["default"](host, {
        method: "post",
        body: body
    });
}
exports.getAccountBalance = getAccountBalance;
/**
 * @description Returns the information about a transaction requested by transaction hash.
 * @param host
 * @param hash ethereum tx hash
 * @returns {Promise}
 */
function getTransactionByhash(host, hash) {
    try {
        validator_1["default"].validate({ value: hash, type: "ETH_DATA" });
    }
    catch (e) {
        return Promise.resolve(new response_1["default"](code_1["default"].PARAM_INVALID.code, code_1["default"].PARAM_INVALID.msg));
    }
    var params = [hash];
    var body = {};
    body["method"] = "eth_getTransactionByHash";
    body["params"] = params;
    body["id"] = request_1.id();
    body["jsonrpc"] = "2.0";
    return request_1["default"](host, {
        method: "post",
        body: body
    });
}
exports.getTransactionByhash = getTransactionByhash;
/**
 * @description Executes a new message call immediately without creating a transaction on the block chain.
 * @param host
 * @param tx
 * @param tag
 * @returns {Promise}
 */
function call(host, _a) {
    var tx = _a.tx, tag = _a.tag;
    tag = tag || "latest";
    if (tag) {
        try {
            validator_1["default"].validate({ value: tag, type: "RPC_TAG" });
        }
        catch (e) {
            return Promise.resolve(new response_1["default"](code_1["default"].PARAM_INVALID.code, code_1["default"].PARAM_INVALID.msg));
        }
    }
    var params = [tx, tag];
    var body = {};
    body["method"] = "eth_call";
    body["params"] = params;
    body["id"] = request_1.id();
    body["jsonrpc"] = "2.0";
    return request_1["default"](host, {
        method: "post",
        body: body
    });
}
exports.call = call;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var validator_1 = require("../common/validator");
var request_1 = require("../common/request");
var ethereumjs_util_1 = require("ethereumjs-util");
var host = "http://localhost:8545";
function updateHost(newValue) {
    host = newValue;
}
exports.updateHost = updateHost;
function getTransactionCount(address, tag) {
    return __awaiter(this, void 0, void 0, function () {
        var params, body;
        return __generator(this, function (_a) {
            try {
                validator_1["default"].validate({ value: address, type: "ADDRESS" });
            }
            catch (e) {
                throw new Error("Invalid Address");
            }
            tag = tag || "pending";
            if (tag) {
                try {
                    validator_1["default"].validate({ value: tag, type: "RPC_TAG" });
                }
                catch (e) {
                    throw new Error("Invalid tag, must be one of latest, pending, earliest");
                }
            }
            params = [address, tag];
            body = {};
            body["method"] = "eth_getTransactionCount";
            body["params"] = params;
            // Set id
            body["id"] = 1;
            return [2 /*return*/, request_1["default"](host, {
                    method: "post",
                    body: body
                })];
        });
    });
}
exports.getTransactionCount = getTransactionCount;
function getGasPrice() {
    return __awaiter(this, void 0, void 0, function () {
        var params, body;
        return __generator(this, function (_a) {
            params = [];
            body = {};
            body["method"] = "eth_gasPrice";
            body["params"] = params;
            // Set id
            body["id"] = 1;
            return [2 /*return*/, request_1["default"](host, {
                    method: "post",
                    body: body
                })];
        });
    });
}
exports.getGasPrice = getGasPrice;
function estimateGas(tx) {
    return __awaiter(this, void 0, void 0, function () {
        var body;
        return __generator(this, function (_a) {
            body = {};
            body["method"] = "eth_estimateGas";
            body["params"] = [tx];
            // Set id
            body["id"] = 1;
            return [2 /*return*/, request_1["default"](host, {
                    method: "post",
                    body: body
                })];
        });
    });
}
exports.estimateGas = estimateGas;
function getAccountBalance(address, tag) {
    return __awaiter(this, void 0, void 0, function () {
        var params, body;
        return __generator(this, function (_a) {
            try {
                validator_1["default"].validate({ value: address, type: "ADDRESS" });
            }
            catch (e) {
                throw new Error("Invalid Address");
            }
            tag = tag || "pending";
            if (tag) {
                try {
                    validator_1["default"].validate({ value: tag, type: "RPC_TAG" });
                }
                catch (e) {
                    throw new Error("Invalid tag, must be one of latest, pending,earliest");
                }
            }
            params = [address, tag];
            body = {};
            body["method"] = "eth_getBalance";
            body["params"] = params;
            // Set id
            body["id"] = 1;
            return [2 /*return*/, request_1["default"](host, {
                    method: "post",
                    body: body
                })];
        });
    });
}
exports.getAccountBalance = getAccountBalance;
function getTransactionByhash(hash) {
    return __awaiter(this, void 0, void 0, function () {
        var params, body;
        return __generator(this, function (_a) {
            try {
                validator_1["default"].validate({ value: hash, type: "ETH_DATA" });
            }
            catch (e) {
                throw new Error("Invalid Transaction Hash");
            }
            params = [hash];
            body = {};
            body["method"] = "eth_getTransactionByHash";
            body["params"] = params;
            // Set id
            body["id"] = 1;
            return [2 /*return*/, request_1["default"](host, {
                    method: "post",
                    body: body
                })];
        });
    });
}
exports.getTransactionByhash = getTransactionByhash;
function getTransactionRecipt(hash) {
    return __awaiter(this, void 0, void 0, function () {
        var params, body;
        return __generator(this, function (_a) {
            try {
                validator_1["default"].validate({ value: hash, type: "ETH_DATA" });
            }
            catch (e) {
                throw new Error("Invalid Transaction Hash");
            }
            params = [hash];
            body = {};
            body["method"] = "eth_getTransactionReceipt";
            body["params"] = params;
            // Set id
            body["id"] = 1;
            return [2 /*return*/, request_1["default"](host, {
                    method: "post",
                    body: body
                })];
        });
    });
}
exports.getTransactionRecipt = getTransactionRecipt;
function isValidEthAddress(address) {
    try {
        validator_1["default"].validate({ value: address, type: "ADDRESS" });
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.isValidEthAddress = isValidEthAddress;
function getHash(message) {
    return ethereumjs_util_1.sha3(message);
}
exports.getHash = getHash;

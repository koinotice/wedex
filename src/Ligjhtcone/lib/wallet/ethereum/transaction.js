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
var ethereumjs_tx_1 = require("ethereumjs-tx");
var validator_1 = require("./validator");
var formatter_1 = require("../common/formatter");
var utils_1 = require("./utils");
var request_1 = require("../common/request");
var data_1 = require("../config/data");
// HACK: What is the host in wallet/ethereum?
var host = "host";
var Transaction = /** @class */ (function () {
    function Transaction(rawTx) {
        validator_1["default"].validate({ value: rawTx, type: "BASIC_TX" });
        this.raw = rawTx;
    }
    Transaction.prototype.setGasLimit = function () {
        this.raw["gasLimit"] = this.raw["gasLimit"] || data_1.configs["defaultGasLimit"];
    };
    Transaction.prototype.setGasPrice = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this.raw;
                        _b = "gasPrice";
                        _c = this.raw["gasPrice"];
                        if (_c) return [3 /*break*/, 2];
                        return [4 /*yield*/, utils_1.getGasPrice()];
                    case 1:
                        _c = (_d.sent())["result"];
                        _d.label = 2;
                    case 2:
                        _a[_b] = _c;
                        return [2 /*return*/];
                }
            });
        });
    };
    Transaction.prototype.setChainId = function () {
        this.raw["chainId"] = this.raw["chainId"] || data_1.configs["chainId"] || 1;
    };
    Transaction.prototype.setNonce = function (address, tag) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        tag = tag || "pending";
                        _a = this.raw;
                        _b = "nonce";
                        _c = this.raw["nonce"];
                        if (_c) return [3 /*break*/, 2];
                        return [4 /*yield*/, utils_1.getTransactionCount(address, tag)];
                    case 1:
                        _c = (_d.sent())["result"];
                        _d.label = 2;
                    case 2:
                        _a[_b] = _c;
                        return [2 /*return*/];
                }
            });
        });
    };
    Transaction.prototype.hash = function () {
        validator_1["default"].validate({ value: this.raw, type: "TX" });
        return new ethereumjs_tx_1["default"](this.raw).hash();
    };
    Transaction.prototype.sign = function (_a) {
        var privateKey = _a.privateKey, walletType = _a.walletType, path = _a.path;
        return __awaiter(this, void 0, void 0, function () {
            var e_1, ethTx, signed;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 1, , 3]);
                        validator_1["default"].validate({ value: this.raw, type: "TX" });
                        return [3 /*break*/, 3];
                    case 1:
                        e_1 = _b.sent();
                        return [4 /*yield*/, this.complete()];
                    case 2:
                        _b.sent();
                        return [3 /*break*/, 3];
                    case 3:
                        ethTx = new ethereumjs_tx_1["default"](this.raw);
                        if (privateKey) {
                            try {
                                if (typeof privateKey === "string") {
                                    validator_1["default"].validate({ value: privateKey, type: "PRIVATE_KEY" });
                                    privateKey = formatter_1.toBuffer(formatter_1.addHexPrefix(privateKey));
                                }
                                else {
                                    validator_1["default"].validate({ value: privateKey, type: "PRIVATE_KEY_BUFFER" });
                                }
                            }
                            catch (e) {
                                throw new Error("Invalid private key");
                            }
                            ethTx.sign(privateKey);
                            signed = formatter_1.toHex(ethTx.serialize());
                        }
                        else {
                            throw new Error("Invalid private key");
                        }
                        this.signed = signed;
                        return [2 /*return*/, signed];
                }
            });
        });
    };
    Transaction.prototype.send = function (_a) {
        var privateKey = _a.privateKey, walletType = _a.walletType, path = _a.path;
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!this.signed) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sign({ privateKey: privateKey, walletType: walletType, path: path })];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2:
                        body = {};
                        body["method"] = "eth_sendRawTransaction";
                        body["params"] = [this.signed];
                        return [2 /*return*/, request_1["default"](host, {
                                method: "post",
                                body: body
                            })];
                }
            });
        });
    };
    Transaction.prototype.sendRawTx = function (signedTx) {
        return __awaiter(this, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                body = {};
                body["method"] = "eth_sendRawTransaction";
                body["params"] = [signedTx];
                return [2 /*return*/, request_1["default"](host, {
                        method: "post",
                        body: body
                    })];
            });
        });
    };
    Transaction.prototype.complete = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setChainId();
                        this.setGasLimit();
                        return [4 /*yield*/, this.setGasPrice()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Transaction;
}());
exports["default"] = Transaction;

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
var validator_1 = require("./validator");
var response_1 = require("../common/response");
var code_1 = require("../common/code");
var formatter_1 = require("../common/formatter");
var ethereumjs_util_1 = require("ethereumjs-util");
var ethereumjs_tx_1 = require("ethereumjs-tx");
/**
 * @description sign hash
 * @param web3
 * @param account
 * @param hash
 * @returns {Promise.<*>}
 */
function sign(web3, account, hash) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                validator_1["default"].validate({ value: account, type: "ETH_ADDRESS" });
            }
            catch (e) {
                return [2 /*return*/, Promise.resolve(new response_1["default"](code_1["default"].PARAM_INVALID.code, code_1["default"].PARAM_INVALID.msg))];
            }
            return [2 /*return*/, new Promise(function (resolve) {
                    web3.eth.sign(account, hash, function (err, result) {
                        if (!err) {
                            var r = result.slice(0, 66);
                            var s = formatter_1.addHexPrefix(result.slice(66, 130));
                            var v = formatter_1.toNumber(formatter_1.addHexPrefix(result.slice(130, 132)));
                            resolve({ result: { r: r, s: s, v: v } });
                        }
                        else {
                            var errorMsg = err.message.substring(0, err.message.indexOf(" at "));
                            resolve({ error: { message: errorMsg } });
                        }
                    });
                })];
        });
    });
}
exports.sign = sign;
/**
 * @description sign message
 * @param web3
 * @param account
 * @param message
 * @returns {Promise}
 */
function signMessage(web3, account, message) {
    var hash = formatter_1.toHex(ethereumjs_util_1.hashPersonalMessage(ethereumjs_util_1.sha3(message)));
    return sign(web3, account, hash);
}
exports.signMessage = signMessage;
/**
 * @description Signs ethereum tx
 * @param web3
 * @param account
 * @param rawTx
 * @returns {Promise.<*>}
 */
function signEthereumTx(web3, account, rawTx) {
    return __awaiter(this, void 0, void 0, function () {
        var ethTx, hash, response, signature, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    try {
                        validator_1["default"].validate({ value: rawTx, type: "TX" });
                    }
                    catch (e) {
                        return [2 /*return*/, Promise.resolve(new response_1["default"](code_1["default"].PARAM_INVALID.code, code_1["default"].PARAM_INVALID.msg))];
                    }
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    ethTx = new ethereumjs_tx_1["default"](rawTx);
                    hash = formatter_1.toHex(ethTx.hash(false));
                    return [4 /*yield*/, sign(web3, account, hash)];
                case 2:
                    response = _a.sent();
                    if (!response["error"]) {
                        signature = response["result"];
                        signature.v += ethTx._chainId * 2 + 8;
                        Object.assign(ethTx, signature);
                        return [2 /*return*/, { result: formatter_1.toHex(ethTx.serialize()) }];
                    }
                    else {
                        return [2 /*return*/, response];
                    }
                    return [3 /*break*/, 4];
                case 3:
                    e_1 = _a.sent();
                    console.log("Failed to sign EthereumTx");
                    console.log(e_1);
                    return [2 /*return*/, e_1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.signEthereumTx = signEthereumTx;
/**
 * @description Sends ethereum tx through MetaMask
 * @param web3
 * @param tx
 * @returns {*}
 */
function sendTransaction(web3, tx) {
    try {
        validator_1["default"].validate({ type: "TX", value: tx });
    }
    catch (e) {
        return Promise.resolve(new response_1["default"](code_1["default"].PARAM_INVALID.code, code_1["default"].PARAM_INVALID.msg));
    }
    return new Promise(function (resolve) {
        web3.eth.sendTransaction(tx, function (err, transactionHash) {
            if (!err) {
                resolve({ result: transactionHash });
            }
            else {
                var errorMsg = err.message.substring(0, err.message.indexOf(" at "));
                resolve({ error: { message: errorMsg } });
            }
        });
    });
}
exports.sendTransaction = sendTransaction;

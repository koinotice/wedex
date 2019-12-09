"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// @ts-ignore
/* ts-disable */
var validator_1 = require("./validator");
var formatter_1 = require("../common/formatter");
var keystore_1 = require("./keystore");
var ethereumjs_util_1 = require("ethereumjs-util");
var mnemonic_1 = require("./mnemonic");
var bip39_1 = require("bip39");
var utils_1 = require("../common/utils");
var hdkey_1 = require("hdkey");
var ethereumjs_tx_1 = require("ethereumjs-tx");
var MetaMask = require("./metaMask");
var ethereumjs_wallet_1 = require("ethereumjs-wallet");
var wallets_json_1 = require("../config/wallets.json");
var LoopringWallet = wallets_json_1["default"].find(function (wallet) { return utils_1.trimAll(wallet.name).toLowerCase() === "loopringwallet"; });
exports.path = LoopringWallet.dpath;
function createWallet() {
    return ethereumjs_wallet_1["default"].generate();
}
exports.createWallet = createWallet;
/**
 * @description Returns the ethereum address  of a given private key
 * @param privateKey
 * @returns {string}
 */
function privateKeytoAddress(privateKey) {
    try {
        if (typeof privateKey === "string") {
            validator_1["default"].validate({ value: privateKey, type: "ETH_KEY" });
            privateKey = formatter_1.toBuffer(formatter_1.addHexPrefix(privateKey));
        }
        else {
            validator_1["default"].validate({ value: privateKey, type: "PRIVATE_KEY_BUFFER" });
        }
    }
    catch (e) {
        throw new Error("Invalid private key");
    }
    return formatter_1.formatAddress(ethereumjs_util_1.privateToAddress(privateKey));
}
exports.privateKeytoAddress = privateKeytoAddress;
/**
 * @description Returns the ethereum address of a given public key.
 * Accepts "Ethereum public keys" and SEC1 encoded keys.
 * @param publicKey Buffer | string
 * @param sanitize bool [sanitize=false] Accept public keys in other formats
 * @returns {string}
 */
function publicKeytoAddress(publicKey, sanitize) {
    publicKey = formatter_1.toBuffer(publicKey);
    return formatter_1.formatAddress(ethereumjs_util_1.publicToAddress(publicKey, sanitize));
}
exports.publicKeytoAddress = publicKeytoAddress;
/**
 *
 * @param publicKey
 * @param chainCode
 * @param pageSize
 * @param pageNum
 * @returns {<Array>}
 */
function getAddresses(_a) {
    var publicKey = _a.publicKey, chainCode = _a.chainCode, pageSize = _a.pageSize, pageNum = _a.pageNum;
    var addresses = [];
    var hdk = new hdkey_1["default"]();
    hdk.publicKey =
        publicKey instanceof Buffer ? publicKey : formatter_1.toBuffer(formatter_1.addHexPrefix(publicKey));
    hdk.chainCode =
        chainCode instanceof Buffer ? chainCode : formatter_1.toBuffer(formatter_1.addHexPrefix(chainCode));
    for (var i = 0; i < pageSize; i++) {
        var dkey = hdk.derive("m/" + (i + pageSize * pageNum));
        addresses.push(publicKeytoAddress(dkey.publicKey, true));
    }
    return addresses;
}
exports.getAddresses = getAddresses;
/**
 * @description Returns the ethereum public key of a given private key.
 * @param privateKey Buffer | string
 * @returns {string}
 */
function privateKeytoPublic(privateKey) {
    try {
        if (typeof privateKey === "string") {
            validator_1["default"].validate({ value: privateKey, type: "ETH_KEY" });
            privateKey = formatter_1.toBuffer(formatter_1.addHexPrefix(privateKey));
        }
        else {
            validator_1["default"].validate({ value: privateKey, type: "PRIVATE_KEY_BUFFER" });
        }
    }
    catch (e) {
        throw new Error("Invalid private key");
    }
    return formatter_1.formatKey(ethereumjs_util_1.privateToPublic(privateKey));
}
exports.privateKeytoPublic = privateKeytoPublic;
/**
 * @description Returns WalletAccount of given mnemonic, dpath and password
 * @param mnemonic string
 * @param dpath string
 * @param password string
 * @returns {WalletAccount}
 */
function fromMnemonic(mnemonic, dpath, password) {
    var privateKey = mnemonic_1.mnemonictoPrivatekey(mnemonic, dpath, password);
    return fromPrivateKey(privateKey);
}
exports.fromMnemonic = fromMnemonic;
/**
 * @description Returns WalletAccount of a given private key
 * @param privateKey string | buffer
 * @returns {WalletAccount}
 */
function fromPrivateKey(privateKey) {
    return new PrivateKeyAccount(privateKey);
}
exports.fromPrivateKey = fromPrivateKey;
/**
 * @description Returns WalletAccount of the given keystore
 * @param keystore string
 * @param password string
 * @returns {WalletAccount}
 */
function fromKeystore(keystore, password) {
    var privateKey = keystore_1.decryptKeystoreToPkey(keystore, password);
    return fromPrivateKey(privateKey);
}
exports.fromKeystore = fromKeystore;
function fromMetaMask(web3, account, address) {
    return new MetaMaskAccount(web3, account, address);
}
exports.fromMetaMask = fromMetaMask;
/**
 * @description generate mnemonic
 * @param strength
 * @returns {*}
 */
function createMnemonic(strength) {
    return bip39_1.generateMnemonic(strength || 256);
}
exports.createMnemonic = createMnemonic;
// Hack: Failed to import in react web app
var WalletAccount = /** @class */ (function () {
    function WalletAccount() {
    }
    // Hack: to use in typescript
    WalletAccount.prototype.getAddress = function () {
        return "1";
    };
    // /**
    //  * @description sign
    //  * @param hash
    //  */
    // sign(hash) {
    //     throw Error('unimplemented');
    // }
    // /**
    //  * @description Returns serialized signed ethereum tx
    //  * @param rawTx
    //  * @returns {string}
    //  */
    WalletAccount.prototype.signEthereumTx = function (rawTx) {
        throw Error("unimplemented");
    };
    // /**
    //  * @description Returns given order along with r, s, v
    //  * @param order
    //  */
    // signOrder(order) {
    //     throw Error('unimplemented');
    // }
    // /**
    //  * @description Calculates an Ethereum specific signature with: sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message))).
    //  * @param message string
    //  */
    // signMessage(message) {
    //     throw Error('unimplemented');
    // }
    WalletAccount.prototype.sendTransaction = function (ethNode, signedTx) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ethNode.sendRawTransaction(signedTx)];
                    case 1:
                        response = _a.sent();
                        console.log("WalletAccount sendTransaction: ", response);
                        return [2 /*return*/, response];
                }
            });
        });
    };
    return WalletAccount;
}());
exports.WalletAccount = WalletAccount;
var PrivateKeyAccount = /** @class */ (function (_super) {
    __extends(PrivateKeyAccount, _super);
    /**
     * @property
     * @param privateKey string | Buffer
     */
    function PrivateKeyAccount(privateKey) {
        var _this = _super.call(this) || this;
        try {
            if (typeof privateKey === "string") {
                validator_1["default"].validate({ value: privateKey, type: "ETH_KEY" });
                privateKey = formatter_1.toBuffer(formatter_1.addHexPrefix(privateKey));
            }
            else {
                validator_1["default"].validate({ value: privateKey, type: "PRIVATE_KEY_BUFFER" });
            }
        }
        catch (e) {
            throw new Error("Invalid private key");
        }
        _this.privateKey = privateKey;
        return _this;
    }
    /**
     * @description Returns V3 type keystore of this account
     * @param password
     * @returns {{version, id, address, crypto}}
     */
    PrivateKeyAccount.prototype.toV3Keystore = function (password) {
        return keystore_1.pkeyToKeystore(this.privateKey, password);
    };
    /**
     * Returns ethereum public key of this account
     * @returns {string}
     */
    PrivateKeyAccount.prototype.getPublicKey = function () {
        return privateKeytoPublic(this.privateKey);
    };
    PrivateKeyAccount.prototype.getAddress = function () {
        return privateKeytoAddress(this.privateKey);
    };
    PrivateKeyAccount.prototype.sign = function (hash) {
        hash = formatter_1.toBuffer(hash);
        var signature = ethereumjs_util_1.ecsign(hash, this.privateKey);
        var v = formatter_1.toNumber(signature.v);
        var r = formatter_1.toHex(signature.r);
        var s = formatter_1.toHex(signature.s);
        return { r: r, s: s, v: v };
    };
    PrivateKeyAccount.prototype.signMessage = function (message) {
        var hash = ethereumjs_util_1.sha3(message);
        var finalHash = ethereumjs_util_1.hashPersonalMessage(hash);
        return this.sign(finalHash);
    };
    PrivateKeyAccount.prototype.signEthereumTx = function (rawTx) {
        validator_1["default"].validate({ type: "TX", value: rawTx });
        var ethTx = new ethereumjs_tx_1["default"](rawTx);
        ethTx.sign(this.privateKey);
        return formatter_1.toHex(ethTx.serialize());
    };
    return PrivateKeyAccount;
}(WalletAccount));
exports.PrivateKeyAccount = PrivateKeyAccount;
var MetaMaskAccount = /** @class */ (function (_super) {
    __extends(MetaMaskAccount, _super);
    function MetaMaskAccount(web3, account, address) {
        var _this = _super.call(this) || this;
        _this.web3 = web3;
        _this.account = account;
        _this.address = address;
        return _this;
    }
    MetaMaskAccount.prototype.getAddress = function () {
        return this.address;
    };
    MetaMaskAccount.prototype.sign = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MetaMask.sign(this.web3, this.account, hash)];
                    case 1:
                        result = _a.sent();
                        if (!result["error"]) {
                            return [2 /*return*/, result["result"]];
                        }
                        else {
                            // SDK shouldn't throw any error
                            throw new Error(result["error"]["message"]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MetaMaskAccount.prototype.signMessage = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MetaMask.signMessage(this.web3, this.account, message)];
                    case 1:
                        result = _a.sent();
                        if (!result["error"]) {
                            return [2 /*return*/, result["result"]];
                        }
                        else {
                            // SDK shouldn't throw any error
                            throw new Error(result["error"]["message"]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MetaMaskAccount.prototype.signEthereumTx = function (rawTx) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, MetaMask.signEthereumTx(this.web3, this.account, rawTx)];
                    case 1:
                        result = _a.sent();
                        if (!result["error"]) {
                            return [2 /*return*/, result["result"]];
                        }
                        else {
                            // SDK shouldn't throw any error
                            throw new Error(result["error"]["message"]);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return MetaMaskAccount;
}(WalletAccount));
exports.MetaMaskAccount = MetaMaskAccount;

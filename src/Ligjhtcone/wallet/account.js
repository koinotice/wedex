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
var __1 = require("..");
var fm = require("../lib/wallet/common/formatter");
var config_1 = require("../lib/wallet/config");
var Contracts_1 = require("../lib/wallet/ethereum/contracts/Contracts");
var transaction_1 = require("../lib/wallet/ethereum/transaction");
var types_1 = require("../model/types");
var assert = require("assert");
var Account = /** @class */ (function () {
    function Account(account) {
        this.account = account;
    }
    /**
     * Approve Zero
     * @param symbol: approve token symbol to zero
     * @param nonce: Ethereum nonce of this address
     * @param gasPrice: gas price in gwei
     */
    Account.prototype.approveZero = function (symbol, nonce, gasPrice) {
        var token = config_1["default"].getTokenBySymbol(symbol);
        var rawTx = new transaction_1["default"]({
            to: token.address,
            value: "0x0",
            data: Contracts_1["default"].ERC20Token.encodeInputs("approve", {
                _spender: config_1["default"].getExchangeAddress(),
                _value: "0x0"
            }),
            chainId: config_1["default"].getChainId(),
            nonce: fm.toHex(nonce),
            gasPrice: fm.toHex(fm.fromGWEI(gasPrice)),
            gasLimit: fm.toHex(config_1["default"].getGasLimitByType("approve").gasInWEI)
        });
        return this.account.signEthereumTx(rawTx.raw);
    };
    /**
     * Approve Max
     * @param symbol: approve token symbol to max
     * @param nonce: Ethereum nonce of this address
     * @param gasPrice: gas price in gwei
     */
    Account.prototype.approveMax = function (symbol, nonce, gasPrice) {
        var token = config_1["default"].getTokenBySymbol(symbol);
        var rawTx = new transaction_1["default"]({
            to: token.address,
            value: "0x0",
            data: Contracts_1["default"].ERC20Token.encodeInputs("approve", {
                _spender: config_1["default"].getExchangeAddress(),
                _value: config_1["default"].getMaxAmountInWEI()
            }),
            chainId: config_1["default"].getChainId(),
            nonce: fm.toHex(nonce),
            gasPrice: fm.toHex(fm.fromGWEI(gasPrice)),
            gasLimit: fm.toHex(config_1["default"].getGasLimitByType("approve").gasInWEI)
        });
        return this.account.signEthereumTx(rawTx.raw);
    };
    /**
     * generate key pair of account in DEX
     * @param password: account specified password
     */
    Account.prototype.generateKeyPair = function (password) {
        try {
            assert(this.account !== null);
            return __1.exchange.generateKeyPair(this.account.getAddress() + password);
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * verify password of account in DEX
     * @param publicKeyX: publicKeyX of account's key pair
     * @param publicKeyY: publicKeyY of account's key pair
     * @param password: account specified password
     */
    Account.prototype.verifyPassword = function (publicKeyX, publicKeyY, password) {
        try {
            assert(this.account !== null);
            return __1.exchange.verifyPassword(publicKeyX, publicKeyY, this.account.getAddress() + password);
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * create Or Update Account in DEX
     * @param gasPrice: in gwei
     * @param nonce: Ethereum nonce of this address
     * @param permission: user permission
     * @param password: user password
     */
    Account.prototype.createOrUpdateAccount = function (password, nonce, gasPrice, permission) {
        return __awaiter(this, void 0, void 0, function () {
            var createOrUpdateAccountResposne, rawTx, signedEthereumTx, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        permission = permission !== undefined ? permission : "";
                        createOrUpdateAccountResposne = __1.exchange.createOrUpdateAccount(this.account, password, nonce, gasPrice, fm.toBuffer(permission));
                        rawTx = createOrUpdateAccountResposne["rawTx"];
                        return [4 /*yield*/, this.account.signEthereumTx(rawTx.raw)];
                    case 1:
                        signedEthereumTx = _a.sent();
                        return [2 /*return*/, {
                                signedTx: signedEthereumTx,
                                keyPair: createOrUpdateAccountResposne["keyPair"]
                            }];
                    case 2:
                        e_1 = _a.sent();
                        throw e_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Deposit to Dex
     * @param symbol: string symbol of token to deposit
     * @param amount: string number amount to deposit, e.g. '1.5'
     * @param nonce: Ethereum nonce of this address
     * @param gasPrice: gas price in gwei
     */
    Account.prototype.depositTo = function (symbol, amount, nonce, gasPrice) {
        return __awaiter(this, void 0, void 0, function () {
            var rawTx, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        rawTx = __1.exchange.deposit(this.account, symbol, amount, nonce, gasPrice);
                        return [4 /*yield*/, this.account.signEthereumTx(rawTx.raw)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_2 = _a.sent();
                        throw e_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * On-chain Withdrawal from Dex
     * @param symbol: string symbol of token to withdraw
     * @param amount: string number amount to withdraw, e.g. '1.5'
     * @param nonce: Ethereum nonce of this address
     * @param gasPrice: gas price in gwei
     */
    Account.prototype.onchainWithdrawal = function (symbol, amount, nonce, gasPrice) {
        return __awaiter(this, void 0, void 0, function () {
            var rawTx, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        rawTx = __1.exchange.withdraw(this.account, symbol, amount, nonce, gasPrice);
                        return [4 /*yield*/, this.account.signEthereumTx(rawTx.raw)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        e_3 = _a.sent();
                        throw e_3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Off-chain Withdrawal from Dex
     * @param accountId: account ID in exchange
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     * @param nonce: DEX nonce of account
     * @param token: token symbol or address to withdraw
     * @param amount: amount to withdraw, in decimal string. e.g. '15'
     * @param tokenF: fee token symbol or address to withdraw
     * @param amountF: withdrawal fee, in decimal string. e.g. '15'
     * @param label: [OPTIONAL] label used in protocol
     */
    Account.prototype.offchainWithdrawal = function (accountId, publicKeyX, publicKeyY, privateKey, nonce, token, amount, tokenF, amountF, label) {
        try {
            var withdraw = new types_1.WithdrawalRequest();
            var account = new types_1.DexAccount();
            account.keyPair = new types_1.KeyPair();
            withdraw.account = account;
            withdraw.account.accountId = accountId;
            withdraw.account.keyPair.publicKeyX = publicKeyX;
            withdraw.account.keyPair.publicKeyY = publicKeyY;
            withdraw.account.keyPair.secretKey = privateKey;
            withdraw.account.nonce = nonce;
            withdraw.token = token;
            withdraw.amount = amount;
            withdraw.tokenF = tokenF;
            withdraw.amountF = amountF;
            withdraw.label = label;
            return __1.exchange.submitWithdrawal(withdraw);
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * Get signed order, should be submitted by frontend itself TEMPORARY
     * @param owner: Ethereum address of this order's owner
     * @param accountId: account ID in exchange
     * @param tokenS: symbol or hex address of token sell
     * @param tokenB: symbol or hex address of token buy
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     * @param amountS: amount of token sell, in string number
     * @param amountB: amount of token buy, in string number
     * @param orderId: next order ID, needed by order signature
     * @param validSince: valid beginning period of this order, SECOND in timestamp
     * @param validUntil: valid ending period of this order, SECOND in timestamp
     * @param label: [OPTIONAL] label used in protocol
     */
    Account.prototype.submitOrder = function (owner, accountId, publicKeyX, publicKeyY, privateKey, tokenS, tokenB, amountS, amountB, orderId, validSince, validUntil, label) {
        try {
            var order = new types_1.OrderRequest();
            order.owner = owner;
            order.accountId = accountId;
            order.keyPair = new types_1.KeyPair();
            order.keyPair.publicKeyX = publicKeyX;
            order.keyPair.publicKeyY = publicKeyY;
            order.keyPair.secretKey = privateKey;
            order.tokenS = tokenS;
            order.tokenB = tokenB;
            order.amountS = amountS;
            order.amountB = amountB;
            order.orderId = orderId;
            order.validSince = Math.floor(validSince);
            order.validUntil = Math.floor(validUntil);
            order.label = label;
            return __1.exchange.submitOrder(this.account, order);
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * Cancel order in Dex
     * @param accountId: account ID in exchange
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     * @param nonce: DEX nonce of account
     * @param orderToken: token symbol or address of cancel
     * @param orderId: specified order id to cancel
     * @param tokenF: amountF token symbol or address of cancel
     * @param amountF: cancel amountF, e.g. '15'
     * @param label: [OPTIONAL] label used in protocol
     */
    Account.prototype.submitCancel = function (accountId, publicKeyX, publicKeyY, privateKey, nonce, orderToken, orderId, tokenF, amountF, label) {
        try {
            var cancel = new types_1.CancelRequest();
            var account = new types_1.DexAccount();
            account.keyPair = new types_1.KeyPair();
            cancel.account = account;
            cancel.account.accountId = accountId;
            cancel.account.keyPair.publicKeyX = publicKeyX;
            cancel.account.keyPair.publicKeyY = publicKeyY;
            cancel.account.keyPair.secretKey = privateKey;
            cancel.account.nonce = nonce;
            cancel.orderToken = orderToken;
            cancel.orderId = orderId;
            cancel.tokenF = tokenF;
            cancel.amountF = amountF;
            cancel.label = label;
            return __1.exchange.submitCancel(cancel);
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * Get Api Key signature
     * @param accountId: account ID in exchange
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     */
    Account.prototype.getApiKey = function (accountId, publicKeyX, publicKeyY, privateKey) {
        try {
            var request = new types_1.GetAPIKeyRequest();
            var account = new types_1.DexAccount();
            account.keyPair = new types_1.KeyPair();
            request.account = account;
            request.account.accountId = accountId;
            request.account.keyPair.publicKeyX = publicKeyX;
            request.account.keyPair.publicKeyY = publicKeyY;
            request.account.keyPair.secretKey = privateKey;
            return __1.exchange.signGetApiKey(request);
        }
        catch (e) {
            throw e;
        }
    };
    /**
     * Get Api Key signature
     * @param accountId: account ID in exchange
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     * @param orderHash: [OPTIONAL] specified order hash to cancel
     * @param clientOrderId: [OPTIONAL] specified client order ID to cancel
     */
    Account.prototype.submitFlexCancel = function (accountId, publicKeyX, publicKeyY, privateKey, orderHash, clientOrderId) {
        try {
            var request = new types_1.FlexCancelRequest();
            var account = new types_1.DexAccount();
            account.keyPair = new types_1.KeyPair();
            request.account = account;
            request.account.accountId = accountId;
            request.account.keyPair.publicKeyX = publicKeyX;
            request.account.keyPair.publicKeyY = publicKeyY;
            request.account.keyPair.secretKey = privateKey;
            request.orderHash = orderHash;
            request.clientOrderId = clientOrderId;
            return __1.exchange.submitFlexCancel(request);
        }
        catch (e) {
            throw e;
        }
    };
    return Account;
}());
exports.Account = Account;

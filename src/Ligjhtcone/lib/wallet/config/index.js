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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
//const config = require('./config.json');
var data = require("./data");
var fm = require("../common/formatter");
var config = data.configs;
var fees = config.fees;
var txs = config.txs;
function requestWhiteList() {
    var url = "//raw.githubusercontent.com/Loopring/mock-relay-data/master/whiteList.json";
    return fetch(url, { method: "GET" }).then(function (res) { return res.json(); });
}
function isinWhiteList(address) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, requestWhiteList().then(function (whiteList) {
                        var result = whiteList.find(function (add) { return add.toLowerCase() === address.toLowerCase(); });
                        return !!result;
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
}
function getChainId() {
    return config.chainId;
}
function getExchangeId() {
    return config.exchangeId;
}
function getLabel() {
    return config.label;
}
function getMaxFeeBips() {
    return config.maxFeeBips;
}
function getTokenBySymbol(symbol) {
    if (!symbol) {
        return {};
    }
    return (getTokens().find(function (token) { return token.symbol.toLowerCase() === symbol.toLowerCase(); }) || {});
}
function getTokenByAddress(address) {
    if (!address) {
        return {};
    }
    return getTokens().find(function (token) { return token.address.toLowerCase() === address.toLowerCase(); });
}
function getCustomTokens() {
    return getTokens().filter(function (token) { return token.custom; });
}
function getTokens() {
    return config.tokens;
}
function fromWEI(symbol, valueInWEI, precision) {
    if (precision === void 0) { precision = 4; }
    var token = getTokenBySymbol(symbol);
    if (!token) {
        return 0;
    }
    var value = fm.toBig(valueInWEI).div("1e" + token.digits);
    return value.toNumber().toFixed(precision);
}
function toWEI(symbol, value) {
    var token = getTokenBySymbol(symbol);
    if (!token) {
        return 0;
    }
    var valueInBN = fm.toBig(value).times("1e" + token.digits);
    return valueInBN.toString(10);
}
function getMarketByPair(pair) {
    if (pair) {
        var pairArr = pair.split("-");
        if (pairArr && pairArr.length === 2) {
            return getMarketBySymbol(pairArr[0], pairArr[1]);
        }
    }
}
function isSupportedMarket(market) {
    if (!market) {
        return false;
    }
    var pair = market.split("-");
    if (pair.length !== 2) {
        return false;
    }
    return getMarkets().find(function (m) {
        return ((m.baseToken === pair[0].toUpperCase() &&
            m.quoteToken === pair[1].toUpperCase()) ||
            (m.baseToken === pair[1].toUpperCase() &&
                m.quoteToken === pair[0].toUpperCase()));
    });
}
function getMarketBySymbol(baseToken, quoteToken) {
    if (baseToken && quoteToken) {
        return (getMarkets().find(function (market) {
            return ((market.baseToken === baseToken &&
                market.quoteToken === quoteToken) ||
                (market.baseToken === quoteToken && market.quoteToken === baseToken));
        }) || {
            pricePrecision: 8
        });
    }
    else {
        return {
            pricePrecision: 8
        };
    }
}
function getMarketsByTokenR(token) {
    return getMarkets().filter(function (item) { return item.quoteToken === token; });
}
function getMarketsByTokenL(token) {
    return getMarkets().filter(function (item) { return item.baseToken === token; });
}
function getTokenSupportedMarkets(token) {
    var leftMarket = getMarketsByTokenL(token);
    var rightMarket = getMarketsByTokenR(token);
    return __spreadArrays(leftMarket, rightMarket);
}
function getMarkets() {
    return config.markets;
}
function getGasLimitByType(type) {
    if (type) {
        return txs.find(function (tx) { return type === tx.type; });
    }
}
function getFeeByType(type) {
    if (type) {
        return fees.find(function (fee) { return type === fee.type; });
    }
}
function getWalletAddress() {
    return config.walletAddress;
}
function getExchangeAddress() {
    return config.exchangeAddress;
}
function getWallets() {
    return data.wallets;
}
function getMaxAmountInWEI() {
    return config.maxAmount;
}
exports["default"] = {
    getTokenBySymbol: getTokenBySymbol,
    getTokenByAddress: getTokenByAddress,
    getTokens: getTokens,
    getMarketBySymbol: getMarketBySymbol,
    getMarketByPair: getMarketByPair,
    getGasLimitByType: getGasLimitByType,
    getFeeByType: getFeeByType,
    isinWhiteList: isinWhiteList,
    getChainId: getChainId,
    getExchangeId: getExchangeId,
    getLabel: getLabel,
    getMaxFeeBips: getMaxFeeBips,
    isSupportedMarket: isSupportedMarket,
    getMarketsByTokenR: getMarketsByTokenR,
    getTokenSupportedMarkets: getTokenSupportedMarkets,
    getMarkets: getMarkets,
    getWalletAddress: getWalletAddress,
    getExchangeAddress: getExchangeAddress,
    getMaxAmountInWEI: getMaxAmountInWEI,
    getWallets: getWallets,
    fromWEI: fromWEI,
    toWEI: toWEI
};

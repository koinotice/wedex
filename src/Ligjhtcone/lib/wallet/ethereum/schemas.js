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
var schemas_1 = require("../common/schemas");
var standSchemas = {
    BASIC_TX: {
        to: __assign({}, schemas_1["default"].ADDRESS),
        value: __assign({}, schemas_1["default"].ETH_DATA),
        gasLimit: {
            type: "string",
            pattern: /^0x[0-9a-fA-F]{1,64}$/g
        },
        gasPrice: {
            type: "string",
            pattern: /^0x[0-9a-fA-F]{1,64}$/g
        },
        chainId: {
            type: "number"
        },
        nonce: {
            type: "string",
            required: true,
            pattern: /^0x[0-9a-fA-F]{1,64}$/g
        },
        data: {
            type: "string",
            required: true,
            pattern: /^0x[0-9a-fA-F]*$/g
        }
    },
    TX: {
        to: __assign({}, schemas_1["default"].ADDRESS),
        value: __assign({}, schemas_1["default"].ETH_DATA),
        gasLimit: __assign({}, schemas_1["default"].ETH_DATA),
        gasPrice: __assign({}, schemas_1["default"].ETH_DATA),
        chainId: {
            type: "number",
            required: true
        },
        nonce: __assign({}, schemas_1["default"].ETH_DATA),
        data: {
            type: "string",
            required: true,
            pattern: /^0x[0-9a-fA-F]*$/g
        },
        signed: {
            type: "string"
        }
    },
    BASIC_TOKEN: {
        address: __assign({}, schemas_1["default"].ADDRESS),
        symbol: {
            type: "string"
        },
        name: {
            type: "string"
        },
        digits: {
            type: "number"
        },
        unit: {
            type: "string"
        },
        website: {
            type: "url"
        },
        allowance: {
            type: "number"
        },
        precision: {
            type: "number"
        },
        minTradeValue: {
            type: "number"
        }
    },
    TOKEN: {
        address: __assign({}, schemas_1["default"].ADDRESS),
        symbol: {
            type: "string",
            required: true
        },
        name: {
            type: "string",
            required: true
        },
        digits: {
            type: "number",
            required: true
        },
        unit: {
            type: "string",
            required: true
        },
        website: {
            type: "url"
        },
        allowance: {
            type: "number",
            required: true
        },
        precision: {
            type: "number",
            required: true
        },
        minTradeValue: {
            type: "number",
            required: true
        }
    }
};
// Hack: What is standSchemas?
exports["default"] = standSchemas;

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
var AbiFunction_1 = require("./AbiFunction");
var formatter_1 = require("../../common/formatter");
var ethereumjs_abi = require("ethereumjs-abi");
var Contract = /** @class */ (function () {
    function Contract(abi) {
        var funAbi = abi.filter(function (_a) {
            var type = _a.type;
            return type === "function";
        });
        this.abiFunctions = funAbi.reduce(function (acc, item) {
            var _a;
            var inputTypes = item.inputs.map(function (_a) {
                var type = _a.type;
                return type;
            });
            var key = item.name + "(" + inputTypes.toString() + ")";
            var methodHash = ethereumjs_abi.methodID(item.name, inputTypes);
            return __assign(__assign({}, acc), (_a = {}, _a[item.name] = new AbiFunction_1["default"](item), _a[key] = new AbiFunction_1["default"](item), _a[methodHash] = new AbiFunction_1["default"](item), _a));
        });
    }
    /**
     * @description Encodes inputs data according to  ethereum abi
     * @param method string can be full method or just method name, examples: 'balanceOf' or balanceOf(address)
     * @param inputs array
     * @returns {*|string}
     */
    Contract.prototype.encodeInputs = function (method, inputs) {
        var abiFunction = this.abiFunctions[method];
        if (abiFunction) {
            return abiFunction.encodeInputs(inputs);
        }
        else {
            throw new Error("No  " + method + " method according to abi ");
        }
    };
    /**
     * @description Decodes outputs
     * @param method string can be full method or just method name, examples: 'balanceOf' or balanceOf(address)
     * @param outputs string
     * @returns {*}
     */
    Contract.prototype.decodeOutputs = function (method, outputs) {
        var abiFunction = this.abiFunctions[method];
        if (abiFunction) {
            return abiFunction.decodeOutputs(outputs);
        }
        else {
            throw new Error("No  " + method + " method according to abi ");
        }
    };
    /**
     * @description Decode encoded method and inputs
     * @param encode string | Buffer
     * @returns {*}
     */
    Contract.prototype.decodeEncodeInputs = function (encode) {
        encode = formatter_1.toHex(encode);
        var methodId = encode.slice(0, 10);
        var abiFunction = this.abiFunctions[methodId];
        if (abiFunction) {
            return abiFunction.decodeEncodedInputs(encode.slice(10));
        }
        else {
            throw new Error("No corresponding method according to abi ");
        }
    };
    return Contract;
}());
exports["default"] = Contract;

"use strict";
exports.__esModule = true;
// Using import {*} from 'ethereumjs-abi'; failed to import ethereumjs-abi
var abi = require("ethereumjs-abi");
var formatter_1 = require("../../common/formatter");
var bn_js_1 = require("bn.js");
var AbiFunction = /** @class */ (function () {
    function AbiFunction(_a) {
        var inputs = _a.inputs, name = _a.name, outputs = _a.outputs, constant = _a.constant;
        this.name = name;
        this.inputTypes = inputs.map(function (_a) {
            var type = _a.type;
            return type;
        });
        this.inputs = inputs;
        this.outputTypes = outputs.map(function (_a) {
            var type = _a.type;
            return type;
        });
        this.outputs = outputs;
        this.constant = constant;
        this.methodAbiHash = formatter_1.toHex(abi.methodID(name, this.inputTypes));
    }
    /**
     * @description Returns encoded methodId and inputs
     * @param inputs Object, examples {owner:"0x000...}
     * @returns {string}
     */
    AbiFunction.prototype.encodeInputs = function (inputs) {
        var abiInputs = this.parseInputs(inputs);
        return (this.methodAbiHash +
            formatter_1.clearHexPrefix(formatter_1.toHex(abi.rawEncode(this.inputTypes, abiInputs))));
    };
    /**
     * @description decode ethereum jsonrpc response result
     * @param outputs
     * @returns {*}
     */
    AbiFunction.prototype.decodeOutputs = function (outputs) {
        return this.parseOutputs(abi.rawDecode(this.outputTypes, formatter_1.toBuffer(outputs)));
    };
    /**
     * @description decode encoded inputs
     * @param encoded
     * @returns {*}
     */
    AbiFunction.prototype.decodeEncodedInputs = function (encoded) {
        return this.parseOutputs(abi.rawDecode(this.inputTypes, formatter_1.toBuffer(formatter_1.addHexPrefix(encoded))));
    };
    AbiFunction.prototype.parseInputs = function (inputs) {
        if (inputs === void 0) { inputs = {}; }
        return this.inputs.map(function (_a) {
            var name = _a.name, type = _a.type;
            if (inputs[name] === undefined) {
                throw new Error("Parameter " + name + " of type " + type + " is required!");
            }
            return inputs[name];
        });
    };
    AbiFunction.prototype.parseOutputs = function (outputs) {
        return outputs.map(function (output) {
            if (output instanceof bn_js_1["default"]) {
                return formatter_1.toHex(output);
            }
            return output;
        });
    };
    return AbiFunction;
}());
exports["default"] = AbiFunction;

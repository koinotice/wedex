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
var async_validator_1 = require("async-validator");
var schemas_1 = require("./schemas");
var schemas = {
    basic: __assign({}, schemas_1["default"])
};
var handleErrors = function (errors, fields) {
    var msgs = errors.map(function (err) { return err.message; }).join();
    throw new Error("data type invalid: " + msgs + " \n");
};
var validate = function (payload) {
    var type = payload.type, value = payload.value, onError = payload.onError, onSuccess = payload.onSuccess;
    var source = {};
    var schema = {};
    // fix bug: if value undefined or null
    if (typeof value === "undefined") {
        throw new Error("data type invalid: " + type + " should not be undefined");
    }
    if (value === null) {
        throw new Error("data type invalid: " + type + " should not be null");
    }
    if (schemas["basic"][type]) {
        // validate one field , schema & source must just has one field
        schema[type] = schemas["basic"][type];
        source[type] = value;
    }
    // TODO: if schema empty
    var validator = new async_validator_1["default"](schema);
    validator.validate(source, function (errors, fields) {
        if (errors) {
            console.log("validate start source", source);
            console.log("validate start schema", schema);
            if (onError) {
                onError(errors, fields);
            }
            else {
                handleErrors(errors, fields);
            }
        }
        else {
            if (onSuccess) {
                onSuccess();
            }
        }
    });
};
exports["default"] = {
    validate: validate
};

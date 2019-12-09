"use strict";
exports.__esModule = true;
require("isomorphic-fetch");
var crypto_1 = require("crypto");
var headers = {
    "Content-Type": "application/json"
};
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    else {
        var error = new Error(response.statusText);
        error["response"] = response;
        throw error;
    }
}
/**
 * @description Supports single request and batch request;
 * @param host
 * @param options
 * @param timeOut
 * @returns {Promise}
 */
function request(host, options, timeOut) {
    timeOut = timeOut || 15000;
    var requestPromise = new Promise(function (resolve) {
        if (options.body) {
            options.headers = options.headers || headers;
            options.body = JSON.stringify(options.body);
        }
        fetch(host, options)
            .then(checkStatus)
            .then(function (res) { return res.json(); })
            .then(function (data) { return resolve(data); })["catch"](function (e) {
            resolve({ error: e });
        });
    });
    var timeoutPromise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ error: { message: "request time out" } });
        }, timeOut);
    });
    return Promise.race([requestPromise, timeoutPromise]);
}
/**
 * @description Returns a random hex string
 */
function id() {
    return crypto_1["default"].randomBytes(8).toString("hex");
}
exports.id = id;
exports["default"] = request;

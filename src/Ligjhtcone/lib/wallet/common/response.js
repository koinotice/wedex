"use strict";
exports.__esModule = true;
var Response = /** @class */ (function () {
    function Response(errorCode, errorMsg) {
        this["id"] = "1";
        this["result"] = null;
        this["error"] = {
            code: errorCode,
            message: errorMsg,
            data: null
        };
    }
    return Response;
}());
exports["default"] = Response;
// common/config/config.json index.js
// loopring/ethereum/abi.js token.js transaction.js util.js

"use strict";
exports.__esModule = true;
var Contract_1 = require("./Contract");
var erc20_json_1 = require("../../config/abis/erc20.json");
var weth_json_1 = require("../../config/abis/weth.json");
var airdrop_json_1 = require("../../config/abis/airdrop.json");
var exchange_json_1 = require("../../config/abis/exchange.json");
var WETH = new Contract_1["default"](weth_json_1["default"]);
var ERC20Token = new Contract_1["default"](erc20_json_1["default"]);
var AirdropContract = new Contract_1["default"](airdrop_json_1["default"]);
var ExchangeContract = new Contract_1["default"](exchange_json_1["default"]);
exports["default"] = {
    ERC20Token: ERC20Token,
    WETH: WETH,
    AirdropContract: AirdropContract,
    ExchangeContract: ExchangeContract
};

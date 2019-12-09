import request from "./request";
import * as formatter from "./formatter";
import response from "./response";
import * as utils from "./utils";
declare const _default: {
    formatter: typeof formatter;
    request: typeof request;
    validator: {
        validate: (payload: any) => void;
    };
    code: {
        SUCC: {
            code: number;
            msg: string;
        };
        PARAM_INVALID: {
            code: number;
            msg: string;
        };
    };
    response: typeof response;
    utils: typeof utils;
};
export default _default;

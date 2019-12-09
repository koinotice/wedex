declare let basicSchemas: {
    STRING: {
        type: string;
        required: boolean;
    };
    OPTION_NUMBER: {
        validator: (rule: any, value: any, cb: any) => void;
    };
    URL: {
        type: string;
        required: boolean;
    };
    ADDRESS: {
        type: string;
        required: boolean;
        pattern: RegExp;
    };
    HEX: {
        type: string;
        required: boolean;
        pattern: RegExp;
    };
    ETH_DATA: {
        type: string;
        required: boolean;
        pattern: RegExp;
    };
    QUANTITY: {
        type: string;
        required: boolean;
    };
    PRIVATE_KEY: {
        type: string;
        required: boolean;
        len: number;
    };
    TX_HASH: {
        type: string;
        required: boolean;
        pattern: RegExp;
    };
    ABI_METHOD: {
        type: string;
        required: boolean;
        enum: string[];
    };
    RPC_TAG: {
        type: string;
        required: boolean;
        enum: string[];
    };
    TIMESTAMP: {
        type: string;
    };
    PROJECT_ID: {
        type: string;
        required: boolean;
        min: number;
    };
    LOOPRING_TOKEN: {
        type: string;
        required: boolean;
        enum: string[];
    };
    PRIVATE_KEY_BUFFER: {
        validator: (rule: any, value: any, cb: any) => void;
    };
    CURRENCY: {
        type: string;
        required: boolean;
        enum: string[];
    };
    DEFAULT_BLOCK: {
        type: string;
        required: boolean;
        enum: string[];
    };
    CANCEL_ORDER_TYPE: {
        type: string;
        required: boolean;
        enum: number[];
    };
};
export default basicSchemas;

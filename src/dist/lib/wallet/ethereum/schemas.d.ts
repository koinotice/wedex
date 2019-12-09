declare let standSchemas: {
    BASIC_TX: {
        to: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        value: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        gasLimit: {
            type: string;
            pattern: RegExp;
        };
        gasPrice: {
            type: string;
            pattern: RegExp;
        };
        chainId: {
            type: string;
        };
        nonce: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        data: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
    };
    TX: {
        to: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        value: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        gasLimit: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        gasPrice: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        chainId: {
            type: string;
            required: boolean;
        };
        nonce: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        data: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        signed: {
            type: string;
        };
    };
    BASIC_TOKEN: {
        address: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        symbol: {
            type: string;
        };
        name: {
            type: string;
        };
        digits: {
            type: string;
        };
        unit: {
            type: string;
        };
        website: {
            type: string;
        };
        allowance: {
            type: string;
        };
        precision: {
            type: string;
        };
        minTradeValue: {
            type: string;
        };
    };
    TOKEN: {
        address: {
            type: string;
            required: boolean;
            pattern: RegExp;
        };
        symbol: {
            type: string;
            required: boolean;
        };
        name: {
            type: string;
            required: boolean;
        };
        digits: {
            type: string;
            required: boolean;
        };
        unit: {
            type: string;
            required: boolean;
        };
        website: {
            type: string;
        };
        allowance: {
            type: string;
            required: boolean;
        };
        precision: {
            type: string;
            required: boolean;
        };
        minTradeValue: {
            type: string;
            required: boolean;
        };
    };
};
export default standSchemas;

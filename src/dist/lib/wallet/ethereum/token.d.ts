export default class Token {
    address: string;
    symbol: string;
    name: string;
    digits: number;
    unit: number;
    website: string;
    allowance: number;
    precision: number;
    minTradeValue: number;
    constructor(input: any);
    generateTransferTx({ to, amount, gasPrice, gasLimit, nonce, chainId }: {
        to: any;
        amount: any;
        gasPrice: any;
        gasLimit: any;
        nonce: any;
        chainId: any;
    }): {};
    generateApproveTx({ spender, amount, gasPrice, gasLimit, nonce, chainId }: {
        spender: any;
        amount: any;
        gasPrice: any;
        gasLimit: any;
        nonce: any;
        chainId: any;
    }): {};
    transfer({ privateKey, to, amount, gasPrice, gasLimit, nonce, chainId, walletType, path }: {
        privateKey: any;
        to: any;
        amount: any;
        gasPrice: any;
        gasLimit: any;
        nonce: any;
        chainId: any;
        walletType: any;
        path: any;
    }): Promise<unknown>;
    approve({ spender, amount, privateKey, gasPrice, gasLimit, nonce, chainId, walletType, path }: {
        spender: any;
        amount: any;
        privateKey: any;
        gasPrice: any;
        gasLimit: any;
        nonce: any;
        chainId: any;
        walletType: any;
        path: any;
    }): Promise<unknown>;
    balanceOf(owner: any, tag: any): Promise<unknown>;
    getAllowance(owner: any, spender: any, tag: any): Promise<unknown>;
    getName(): Promise<any>;
    getSymbol(): Promise<any>;
    getDecimals(): Promise<any>;
    getConfig(type: any): Promise<unknown>;
    complete(): Promise<void>;
}

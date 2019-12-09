export default class Transaction {
    raw: string;
    signed: string;
    constructor(rawTx: any);
    setGasLimit(): void;
    setGasPrice(): Promise<void>;
    setChainId(): void;
    setNonce(address: any, tag: any): Promise<void>;
    hash(): any;
    sign({ privateKey, walletType, path }: {
        privateKey: any;
        walletType: any;
        path: any;
    }): Promise<any>;
    send({ privateKey, walletType, path }: {
        privateKey: any;
        walletType: any;
        path: any;
    }): Promise<unknown>;
    sendRawTx(signedTx: any): Promise<unknown>;
    complete(): Promise<void>;
}

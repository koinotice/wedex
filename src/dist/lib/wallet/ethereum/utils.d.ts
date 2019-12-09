export declare function updateHost(newValue: any): void;
export declare function getTransactionCount(address: any, tag: any): Promise<unknown>;
export declare function getGasPrice(): Promise<unknown>;
export declare function estimateGas(tx: any): Promise<unknown>;
export declare function getAccountBalance(address: any, tag?: any): Promise<unknown>;
export declare function getTransactionByhash(hash: any): Promise<unknown>;
export declare function getTransactionRecipt(hash: any): Promise<unknown>;
export declare function isValidEthAddress(address: any): boolean;
export declare function getHash(message: any): any;

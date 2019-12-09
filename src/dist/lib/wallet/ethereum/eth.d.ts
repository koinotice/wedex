export default class Eth {
    host: string;
    constructor(host: any);
    getTransactionCount({ address, tag }: {
        address: any;
        tag: any;
    }): Promise<unknown>;
    sendRawTransaction(signedTx: any): Promise<unknown>;
    getGasPrice(): Promise<unknown>;
    estimateGas(tx: any): Promise<unknown>;
    getAccountBalance({ address, tag }: {
        address: any;
        tag: any;
    }): Promise<unknown>;
    getTransactionByhash(txHash: any): Promise<unknown>;
    call({ tx, tag }: {
        tx: any;
        tag: any;
    }): Promise<unknown>;
}
/**
 * @description Returns the number of transactions sent from an address.
 * @param host
 * @param address
 * @param tag
 * @returns {Promise}
 */
export declare function getTransactionCount(host: any, { address, tag }: {
    address: any;
    tag: any;
}): Promise<unknown>;
/**
 * @description Sends signed ethereum tx
 * @param host
 * @param signedTx
 * @returns {Promise}
 */
export declare function sendRawTransaction(host: any, signedTx: any): Promise<unknown>;
/**
 * @description Returns the current price per gas in wei.
 * @param host
 * @returns {Promise}
 */
export declare function getGasPrice(host: any): Promise<unknown>;
/**
 * @description Generates and returns an estimate of how much gas is necessary to allow the transaction to complete.
 * @param host
 * @param tx
 * @returns {Promise}
 */
export declare function estimateGas(host: any, tx: any): Promise<unknown>;
/**
 * @description Returns the ethereum balance of the account of given address.
 * @param host
 * @param address
 * @param tag
 * @returns {Promise}
 */
export declare function getAccountBalance(host: any, { address, tag }: {
    address: any;
    tag: any;
}): Promise<unknown>;
/**
 * @description Returns the information about a transaction requested by transaction hash.
 * @param host
 * @param hash ethereum tx hash
 * @returns {Promise}
 */
export declare function getTransactionByhash(host: any, hash: any): Promise<unknown>;
/**
 * @description Executes a new message call immediately without creating a transaction on the block chain.
 * @param host
 * @param tx
 * @param tag
 * @returns {Promise}
 */
export declare function call(host: any, { tx, tag }: {
    tx: any;
    tag: any;
}): Promise<unknown>;

/**
 * @description sign hash
 * @param web3
 * @param account
 * @param hash
 * @returns {Promise.<*>}
 */
export declare function sign(web3: any, account: any, hash: any): Promise<unknown>;
/**
 * @description sign message
 * @param web3
 * @param account
 * @param message
 * @returns {Promise}
 */
export declare function signMessage(web3: any, account: any, message: any): Promise<unknown>;
/**
 * @description Signs ethereum tx
 * @param web3
 * @param account
 * @param rawTx
 * @returns {Promise.<*>}
 */
export declare function signEthereumTx(web3: any, account: any, rawTx: any): Promise<any>;
/**
 * @description Sends ethereum tx through MetaMask
 * @param web3
 * @param tx
 * @returns {*}
 */
export declare function sendTransaction(web3: any, tx: any): Promise<unknown>;

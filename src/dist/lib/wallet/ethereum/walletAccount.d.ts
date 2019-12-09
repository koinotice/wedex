export declare const path: string;
export declare function createWallet(): any;
/**
 * @description Returns the ethereum address  of a given private key
 * @param privateKey
 * @returns {string}
 */
export declare function privateKeytoAddress(privateKey: any): any;
/**
 * @description Returns the ethereum address of a given public key.
 * Accepts "Ethereum public keys" and SEC1 encoded keys.
 * @param publicKey Buffer | string
 * @param sanitize bool [sanitize=false] Accept public keys in other formats
 * @returns {string}
 */
export declare function publicKeytoAddress(publicKey: any, sanitize: any): any;
/**
 *
 * @param publicKey
 * @param chainCode
 * @param pageSize
 * @param pageNum
 * @returns {<Array>}
 */
export declare function getAddresses({ publicKey, chainCode, pageSize, pageNum }: {
    publicKey: any;
    chainCode: any;
    pageSize: any;
    pageNum: any;
}): any[];
/**
 * @description Returns the ethereum public key of a given private key.
 * @param privateKey Buffer | string
 * @returns {string}
 */
export declare function privateKeytoPublic(privateKey: any): string;
/**
 * @description Returns WalletAccount of given mnemonic, dpath and password
 * @param mnemonic string
 * @param dpath string
 * @param password string
 * @returns {WalletAccount}
 */
export declare function fromMnemonic(mnemonic: any, dpath: any, password: any): PrivateKeyAccount;
/**
 * @description Returns WalletAccount of a given private key
 * @param privateKey string | buffer
 * @returns {WalletAccount}
 */
export declare function fromPrivateKey(privateKey: any): PrivateKeyAccount;
/**
 * @description Returns WalletAccount of the given keystore
 * @param keystore string
 * @param password string
 * @returns {WalletAccount}
 */
export declare function fromKeystore(keystore: any, password: any): PrivateKeyAccount;
export declare function fromMetaMask(web3: any, account: any, address: any): MetaMaskAccount;
/**
 * @description generate mnemonic
 * @param strength
 * @returns {*}
 */
export declare function createMnemonic(strength: any): any;
export declare class WalletAccount {
    getAddress(): string;
    signEthereumTx(rawTx: any): void;
    sendTransaction(ethNode: any, signedTx: any): Promise<any>;
}
export declare class PrivateKeyAccount extends WalletAccount {
    privateKey: any;
    /**
     * @property
     * @param privateKey string | Buffer
     */
    constructor(privateKey: any);
    /**
     * @description Returns V3 type keystore of this account
     * @param password
     * @returns {{version, id, address, crypto}}
     */
    toV3Keystore(password: any): any;
    /**
     * Returns ethereum public key of this account
     * @returns {string}
     */
    getPublicKey(): string;
    getAddress(): any;
    sign(hash: any): {
        r: string;
        s: string;
        v: number;
    };
    signMessage(message: any): {
        r: string;
        s: string;
        v: number;
    };
    signEthereumTx(rawTx: any): string;
}
export declare class MetaMaskAccount extends WalletAccount {
    web3: any;
    account: any;
    address: string;
    constructor(web3: any, account: any, address: any);
    getAddress(): string;
    sign(hash: any): Promise<any>;
    signMessage(message: any): Promise<any>;
    signEthereumTx(rawTx: any): Promise<any>;
}

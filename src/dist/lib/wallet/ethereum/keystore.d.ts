/**
 * Returns private key of given keystore
 * @param keystore string
 * @param password string
 * @returns {Buffer}
 */
export declare function decryptKeystoreToPkey(keystore: any, password: any): any;
/**
 * Returns keystore of a given ethereum private key with password
 * @param privateKey
 * @param password
 * @returns {{version, id, address, crypto}}  keystore
 */
export declare function pkeyToKeystore(privateKey: any, password: any): any;
/**
 * Returns ethereum private key of given v3 keystore
 * @param keystore string
 * @param password string
 * @returns {Buffer}
 */
export declare function decryptUtcKeystoreToPkey(keystore: any, password: any): any;
/**
 * Returns type of a given keystore
 * @param keystore string
 * @returns {string}
 */
export declare function determineKeystoreType(keystore: any): "presale" | "v2-v3-utc" | "v1-encrypted" | "v1-unencrypted" | "v2-unencrypted";
/**
 * Returns ethereum  private key of given presale keystore
 * @param keystore string
 * @param password string
 * @returns {Buffer}
 */
export declare function decryptPresaleToPrivKey(keystore: any, password: any): any;
/**
 * Returns ethereum  private key of given v1 keystore
 * @param keystore string
 * @param password string
 * @returns {Buffer}
 */
export declare function decryptMewV1ToPrivKey(keystore: any, password: any): any;
/**
 * Checks whether a password is required to decrypt the given keystore
 * @param keystore string
 * @returns {boolean}
 */
export declare function isKeystorePassRequired(keystore: any): boolean;
/**
 * Returns V3 format fileName
 * @param address
 * @returns {string}
 */
export declare function getFileName(address: any): string;

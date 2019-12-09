/**
 * trim head space and tail space
 * @param str string
 */
export declare function trim(str: any): any;
/**
 * trim all spaces
 * @param str
 */
export declare function trimAll(str: any): any;
export declare function keccakHash(str: any): string;
export declare function calculateGas(gasPrice: any, gasLimit: any): import("bignumber.js").BigNumber;
declare const _default: {
    trim: typeof trim;
    trimAll: typeof trimAll;
    keccakHash: typeof keccakHash;
    calculateGas: typeof calculateGas;
    hashPersonalMessage: any;
};
export default _default;

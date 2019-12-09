import BigNumber from "bignumber.js";
import BN from "bn.js";
/**
 *
 * @param mixed Buffer|number|string (hex string must be with '0x' prefix)
 * @returns {Buffer}
 */
export declare function toBuffer(mixed: any): any;
/**
 *
 * @param mixed number | BigNumber |  BN  | Buffer | string
 * @returns {string}
 */
export declare function toHex(mixed: any): string;
/**
 *
 * @param mixed number | BigNumber |  BN  | Buffer | string
 * @returns {number}
 */
export declare function toNumber(mixed: any): number;
/**
 *
 * @param mixed number | BigNumber |  BN  | Buffer | string
 * @returns {BigNumber}
 */
export declare function toBig(mixed: any): BigNumber;
/**
 *
 * @param mixed number | BigNumber |  BN  | Buffer | string
 * @returns {BN}
 */
export declare function toBN(mixed: any): BN;
/**
 *
 * @param mixed number | BigNumber |  BN  | Buffer | string
 * @returns {BN}
 */
export declare function fromGWEI(value: any): BigNumber;
/**
 *
 * @param mixed number | BigNumber |  BN  | Buffer | string
 * @returns {BN}
 */
export declare function toGWEI(valueInWEI: any): BigNumber;
/**
 * Returns formatted hex string of a given private key
 * @param mixed Buffer| string
 * @returns {string}
 */
export declare function formatKey(mixed: any): string;
/**
 * Returns hex string of a given address
 * @param mixed Buffer | string
 * @returns {string}
 */
export declare function formatAddress(mixed: any): any;
/**
 * Returns hex string with '0x' prefix
 * @param input
 * @returns {string}
 */
export declare function addHexPrefix(input: any): string;
/**
 * Returns hex string without '0x' prefix
 * @param input string
 * @returns {string}
 */
export declare function clearHexPrefix(input: any): string;
/**
 *
 * @param hex
 * @returns {string}
 */
export declare function padLeftEven(hex: any): any;
/**
 * Returns symbol of a given kind of currency
 * @param settingsCurrency
 * @returns {*}
 */
export declare function getDisplaySymbol(settingsCurrency: any): "" | "￥" | "$";
/**
 * Returns number in string with a given precision
 * @param number number | BigNumber
 * @param precision number
 * @param ceil bool  round up
 * @returns {string}
 */
export declare function toFixed(number: any, precision: any, ceil: any): string;
declare const _default: {};
export default _default;

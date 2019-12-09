import BN from "bn.js";
import { FloatEncoding } from "./float";
export declare class Constants {
    static readonly TREE_DEPTH_TRADING_HISTORY = 14;
    static readonly TREE_DEPTH_ACCOUNTS = 20;
    static readonly TREE_DEPTH_TOKENS = 8;
    static readonly NUM_BITS_ACCOUNTID = 20;
    static readonly NUM_BITS_ORDERID = 20;
    static readonly NUM_BITS_LABEL = 32;
    static readonly MAX_NUM_TOKENS: number;
    static readonly MAX_AMOUNT: BN;
    static readonly Float28Encoding: FloatEncoding;
    static readonly Float24Encoding: FloatEncoding;
    static readonly Float16Encoding: FloatEncoding;
    static readonly emptyBytes: any;
    static readonly zeroAddress: string;
    static readonly scalarField: BN;
}

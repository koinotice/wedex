import BN from "bn.js";
export interface FloatEncoding {
    numBitsExponent: number;
    numBitsMantissa: number;
    exponentBase: number;
}
export declare function toFloat(value: BN, encoding: FloatEncoding): number;
export declare function fromFloat(f: number, encoding: FloatEncoding): BN;
export declare function roundToFloatValue(value: BN, encoding: FloatEncoding): BN;

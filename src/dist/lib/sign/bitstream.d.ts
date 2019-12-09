/// <reference types="node" />
import { BigNumber } from "bignumber.js";
import BN from "bn.js";
export declare class Bitstream {
    private data;
    constructor(initialData?: string);
    getData(): string;
    getBytes32Array(): string[];
    addBigNumber(x: BigNumber, numBytes?: number): number;
    addBN(x: BN, numBytes?: number): number;
    addNumber(x: number, numBytes?: number): number;
    addAddress(x: string, numBytes?: number): number;
    addHex(x: string): number;
    extractUint8(offset: number): number;
    extractUint16(offset: number): number;
    extractUint24(offset: number): number;
    extractUint32(offset: number): number;
    extractUint40(offset: number): number;
    extractUint48(offset: number): number;
    extractUint56(offset: number): BN;
    extractUint64(offset: number): BN;
    extractUint(offset: number): BN;
    extractAddress(offset: number): string;
    extractBytes1(offset: number): Buffer;
    extractBytes32(offset: number): Buffer;
    extractBytesX(offset: number, length: number): Buffer;
    extractChar(offset: number): string;
    extractData(offset: number, length: number): string;
    length(): number;
    static hashCode(s: any): number;
    private insert;
    private padString;
}

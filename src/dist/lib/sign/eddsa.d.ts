import { KeyPair, Signature } from "../../model/types";
export declare class EdDSA {
    static generateKeyPair(seed: string): KeyPair;
    static sign(strKey: string, msg: string): Signature;
    static verify(msg: string, sig: Signature, pubKey: string[]): boolean;
}

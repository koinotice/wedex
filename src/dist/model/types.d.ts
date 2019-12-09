import BN = require("bn.js");
/**
 * The keypair data for EdDSA.
 */
export declare class KeyPair {
    publicKeyX: string;
    publicKeyY: string;
    secretKey: string;
}
export declare class DexAccount {
    accountId: number;
    keyPair: KeyPair;
    nonce?: number;
}
/**
 * The signature data for EdDSA.
 */
export interface Signature {
    Rx: string;
    Ry: string;
    s: string;
}
export declare class WithdrawalRequest {
    account: DexAccount;
    token: string;
    tokenId?: number;
    amount: string;
    amountInBN?: BN;
    tokenF: string;
    tokenFId?: number;
    amountF: string;
    amountFInBN?: BN;
    label?: number;
    signature?: Signature;
    hash?: string;
}
export declare class OrderRequest {
    owner: string;
    accountId: number;
    exchangeId: number;
    keyPair: KeyPair;
    tokenS: string;
    tokenB: string;
    tokenSId: number;
    tokenBId: number;
    amountS: string;
    amountB: string;
    amountSInBN: BN;
    amountBInBN: BN;
    orderId: number;
    label: number;
    allOrNone?: boolean;
    validSince: number;
    validUntil: number;
    maxFeeBips: number;
    buy?: boolean;
    feeBips: number;
    rebateBips?: number;
    hash?: string;
    signatureRx?: string;
    signatureRy?: string;
    signatureS?: string;
    [key: string]: any;
}
export declare class CancelRequest {
    account: DexAccount;
    orderToken: string;
    orderTokenId?: number;
    orderId: number;
    tokenF: string;
    tokenFId?: number;
    amountF: string;
    amountFInBN?: BN;
    label?: number;
    signature?: Signature;
}
export declare class GetAPIKeyRequest {
    account: DexAccount;
    signature?: Signature;
}
export declare class SignAPIKeyRequest {
    accountId: number;
    publicKeyX: string;
    publicKeyY: string;
}
export declare class FlexCancelRequest {
    account: DexAccount;
    orderHash?: string;
    clientOrderId?: string;
    signature?: Signature;
}
export declare class SignFlexCancelRequest {
    accountId: number;
    orderHash?: string;
    clientOrderId?: string;
}

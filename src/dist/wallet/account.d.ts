import { WalletAccount } from "../lib/wallet/ethereum/walletAccount";
import { CancelRequest, FlexCancelRequest, GetAPIKeyRequest, KeyPair, OrderRequest, WithdrawalRequest } from "../model/types";
export declare class Account {
    account: WalletAccount;
    constructor(account: any);
    /**
     * Approve Zero
     * @param symbol: approve token symbol to zero
     * @param nonce: Ethereum nonce of this address
     * @param gasPrice: gas price in gwei
     */
    approveZero(symbol: string, nonce: number, gasPrice: number): void;
    /**
     * Approve Max
     * @param symbol: approve token symbol to max
     * @param nonce: Ethereum nonce of this address
     * @param gasPrice: gas price in gwei
     */
    approveMax(symbol: string, nonce: number, gasPrice: number): void;
    /**
     * generate key pair of account in DEX
     * @param password: account specified password
     */
    generateKeyPair(password: string): KeyPair;
    /**
     * verify password of account in DEX
     * @param publicKeyX: publicKeyX of account's key pair
     * @param publicKeyY: publicKeyY of account's key pair
     * @param password: account specified password
     */
    verifyPassword(publicKeyX: string, publicKeyY: string, password: string): boolean;
    /**
     * create Or Update Account in DEX
     * @param gasPrice: in gwei
     * @param nonce: Ethereum nonce of this address
     * @param permission: user permission
     * @param password: user password
     */
    createOrUpdateAccount(password: string, nonce: number, gasPrice: number, permission?: string): Promise<{
        signedTx: void;
        keyPair: KeyPair;
    }>;
    /**
     * Deposit to Dex
     * @param symbol: string symbol of token to deposit
     * @param amount: string number amount to deposit, e.g. '1.5'
     * @param nonce: Ethereum nonce of this address
     * @param gasPrice: gas price in gwei
     */
    depositTo(symbol: string, amount: string, nonce: number, gasPrice: number): Promise<void>;
    /**
     * On-chain Withdrawal from Dex
     * @param symbol: string symbol of token to withdraw
     * @param amount: string number amount to withdraw, e.g. '1.5'
     * @param nonce: Ethereum nonce of this address
     * @param gasPrice: gas price in gwei
     */
    onchainWithdrawal(symbol: string, amount: string, nonce: number, gasPrice: number): Promise<void>;
    /**
     * Off-chain Withdrawal from Dex
     * @param accountId: account ID in exchange
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     * @param nonce: DEX nonce of account
     * @param token: token symbol or address to withdraw
     * @param amount: amount to withdraw, in decimal string. e.g. '15'
     * @param tokenF: fee token symbol or address to withdraw
     * @param amountF: withdrawal fee, in decimal string. e.g. '15'
     * @param label: [OPTIONAL] label used in protocol
     */
    offchainWithdrawal(accountId: number, publicKeyX: string, publicKeyY: string, privateKey: string, nonce: number, token: string, amount: string, tokenF: string, amountF: string, label?: number): WithdrawalRequest;
    /**
     * Get signed order, should be submitted by frontend itself TEMPORARY
     * @param owner: Ethereum address of this order's owner
     * @param accountId: account ID in exchange
     * @param tokenS: symbol or hex address of token sell
     * @param tokenB: symbol or hex address of token buy
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     * @param amountS: amount of token sell, in string number
     * @param amountB: amount of token buy, in string number
     * @param orderId: next order ID, needed by order signature
     * @param validSince: valid beginning period of this order, SECOND in timestamp
     * @param validUntil: valid ending period of this order, SECOND in timestamp
     * @param label: [OPTIONAL] label used in protocol
     */
    submitOrder(owner: string, accountId: number, publicKeyX: string, publicKeyY: string, privateKey: string, tokenS: string, tokenB: string, amountS: string, amountB: string, orderId: number, validSince: number, validUntil: number, label?: number): OrderRequest;
    /**
     * Cancel order in Dex
     * @param accountId: account ID in exchange
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     * @param nonce: DEX nonce of account
     * @param orderToken: token symbol or address of cancel
     * @param orderId: specified order id to cancel
     * @param tokenF: amountF token symbol or address of cancel
     * @param amountF: cancel amountF, e.g. '15'
     * @param label: [OPTIONAL] label used in protocol
     */
    submitCancel(accountId: number, publicKeyX: string, publicKeyY: string, privateKey: string, nonce: number, orderToken: string, orderId: number, tokenF: string, amountF: string, label?: number): CancelRequest;
    /**
     * Get Api Key signature
     * @param accountId: account ID in exchange
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     */
    getApiKey(accountId: number, publicKeyX: string, publicKeyY: string, privateKey: string): GetAPIKeyRequest;
    /**
     * Get Api Key signature
     * @param accountId: account ID in exchange
     * @param publicKeyX: trading public key X of account, decimal string
     * @param publicKeyY: trading public key Y of account, decimal string
     * @param privateKey: trading private key of account, decimal string
     * @param orderHash: [OPTIONAL] specified order hash to cancel
     * @param clientOrderId: [OPTIONAL] specified client order ID to cancel
     */
    submitFlexCancel(accountId: number, publicKeyX: string, publicKeyY: string, privateKey: string, orderHash?: string, clientOrderId?: string): FlexCancelRequest;
}

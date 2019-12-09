/// <reference types="node" />
import Transaction from "../lib/wallet/ethereum/transaction";
import { WalletAccount } from "../lib/wallet/ethereum/walletAccount";
import { CancelRequest, FlexCancelRequest, GetAPIKeyRequest, OrderRequest, WithdrawalRequest } from "../model/types";
export declare class Exchange {
    private currentWalletAccount;
    generateKeyPair(seed: string): import("../model/types").KeyPair;
    verifyPassword(publicKeyX: string, publicKeyY: string, seed: string): boolean;
    createOrUpdateAccount(wallet: WalletAccount, password: string, nonce: number, gasPrice: number, permission: Buffer): {
        rawTx: Transaction;
        keyPair: import("../model/types").KeyPair;
    };
    private createAccountAndDeposit;
    deposit(wallet: WalletAccount, symbol: string, amount: string, nonce: number, gasPrice: number): Transaction;
    withdraw(wallet: WalletAccount, symbol: string, amount: string, nonce: number, gasPrice: number): Transaction;
    submitWithdrawal(withdrawal: WithdrawalRequest): WithdrawalRequest;
    signWithdrawal(withdrawal: WithdrawalRequest): WithdrawalRequest;
    signOrder(order: OrderRequest): OrderRequest;
    setupOrder(order: OrderRequest): OrderRequest;
    getRandomInt(max: number): number;
    submitOrder(wallet: WalletAccount, request: OrderRequest): OrderRequest;
    signCancel(cancel: CancelRequest): CancelRequest;
    submitCancel(cancel: CancelRequest): CancelRequest;
    submitFlexCancel(request: FlexCancelRequest): FlexCancelRequest;
    signGetApiKey(request: GetAPIKeyRequest): GetAPIKeyRequest;
}
export declare const exchange: Exchange;

import * as account from "./walletAccount";
import * as keystore from "./keystore";
import * as metamask from "./metaMask";
import * as mnemonic from "./mnemonic";
import * as utils from "./utils";
import eth from "./eth";
declare const _default: {
    abi: {
        AbiFunction: typeof import("./contracts/AbiFunction").default;
        Contract: typeof import("./contracts/Contract").default;
        Contracts: {
            ERC20Token: import("./contracts/Contract").default;
            WETH: import("./contracts/Contract").default;
            AirdropContract: import("./contracts/Contract").default;
            ExchangeContract: import("./contracts/Contract").default;
        };
    };
    account: typeof account;
    keystore: typeof keystore;
    mnemonic: typeof mnemonic;
    metamask: typeof metamask;
    eth: typeof eth;
    wallet: {
        setWallet: (wallet: any) => void;
        getWallet: (address: any) => any;
        isInWhiteList: (address: any) => void;
        getNonce: (address: any) => Promise<number>;
        storeUnlockedAddress: (unlockType: any, address: any) => void;
        getUnlockedAddress: () => any;
        getUnlockedType: () => any;
        clearUnlockedAddress: () => void;
    };
    validator: {
        validate: (payload: any) => void;
    };
    utils: typeof utils;
};
export default _default;

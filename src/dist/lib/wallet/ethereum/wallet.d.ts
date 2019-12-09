declare const _default: {
    setWallet: (wallet: any) => void;
    getWallet: (address: any) => any;
    isInWhiteList: (address: any) => void;
    getNonce: (address: any) => Promise<number>;
    storeUnlockedAddress: (unlockType: any, address: any) => void;
    getUnlockedAddress: () => any;
    getUnlockedType: () => any;
    clearUnlockedAddress: () => void;
};
export default _default;

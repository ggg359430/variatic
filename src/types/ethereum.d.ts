interface Window {
    ethereum?: {
        request: (args: { method: string; params?: any[] | Record<string, any> }) => Promise<any>;
        isMetaMask?: boolean;
        isTrust?: boolean;
    };
}


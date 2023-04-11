import create from 'zustand';
export const useShopStore = create((set) => ({
    shop: null,
    loggedIn: false,
    resetShopState: () => {
        set({ shop: null, loggedIn: false });
    },
    setShop: (shop) => set({ shop }),
}));
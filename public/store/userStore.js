import create from 'zustand';

// const useUserStore = create((set) => ({

// }));

export const useUserStore = create((set) => ({
    user: null,
    loggedIn: false,
    resetUserState: () => {
        set({ user: null, loggedIn: false });
    },
    setUser: (user) => set({ user }),
}));

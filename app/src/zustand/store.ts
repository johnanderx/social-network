import { create } from "zustand";

interface StoreState {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

const useStore = create<StoreState>((set) => ({
  isDarkMode: false,
  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setTheme: (isDark: boolean) => set({ isDarkMode: isDark }),
}));

export default useStore;

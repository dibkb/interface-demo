import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthState {
  jwtAccessToken: string | null;
  spApiRefreshToken: string | null;
  setJwtAccessToken: (token: string) => void;
  setSpApiRefreshToken: (token: string) => void;
  clearTokens: () => void;
  isAuthenticated: () => boolean;
}

const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      jwtAccessToken: null,
      spApiRefreshToken: null,
      setJwtAccessToken: (token: string) => set({ jwtAccessToken: token }),
      setSpApiRefreshToken: (token: string) =>
        set({ spApiRefreshToken: token }),
      clearTokens: () => set({ jwtAccessToken: null, spApiRefreshToken: null }),
      isAuthenticated: () => {
        const state = get();
        return !!state.jwtAccessToken && !!state.spApiRefreshToken;
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useAuthStore;

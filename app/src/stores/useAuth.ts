import useAuthStore from "../stores/authStore";

interface AuthHook {
  isAuthenticated: boolean;
  hasJwtToken: boolean;
  hasSpApiToken: boolean;
}

export function useAuth(): AuthHook {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const jwtAccessToken = useAuthStore((state) => state.jwtAccessToken);
  const spApiRefreshToken = useAuthStore((state) => state.spApiRefreshToken);

  return {
    isAuthenticated: isAuthenticated(),
    hasJwtToken: !!jwtAccessToken,
    hasSpApiToken: !!spApiRefreshToken,
  };
}

"use client";

import { useEffect, ComponentType, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const WrappedComponentWithAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithAuth: React.FC<P> = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        const token =
          typeof window !== "undefined"
            ? localStorage.getItem("accessToken") || Cookies.get("accessToken")
            : null;

        if (!token) {
          router.push("/login");
        } else {
          setIsLoading(false);
        }
      };

      checkAuth();
    }, [router]);

    if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
  return WithAuth;
};

function getDisplayName<P>(WrappedComponent: ComponentType<P>): string {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default WrappedComponentWithAuth;

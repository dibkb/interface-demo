"use client";
import { useEffect, ComponentType, useState } from "react";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";

const WrappedComponentWithAuth = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithAuth: React.FC<P> = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const token =
          localStorage.getItem("accessToken") || Cookies.get("accessToken");

        if (!token) {
          redirect("/login");
        } else {
          setIsLoading(false);
        }
      };

      checkAuth();
    }, []);
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

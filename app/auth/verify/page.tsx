"use client";
import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

const VerifyAuth = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");

    if (token && typeof token === "string") {
      // Store the token
      localStorage.setItem("accessToken", token);
      Cookies.set("accessToken", token, {
        secure: true,
        sameSite: "strict",
        expires: 7,
      });

      router.push("/home/dashboard");
    } else {
      router.push("/login");
    }
  }, [router, searchParams]);

  return <div>Verifying your authentication...</div>;
};

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyAuth />
    </Suspense>
  );
}

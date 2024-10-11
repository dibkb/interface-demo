"use client";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { BACKEND_URL } from "@/config";

export default function AuthCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState("Processing authentication...");
  async function sendRefreshToken() {
    const refresh_token = searchParams?.get("refresh_token");
    const error = searchParams?.get("error");

    if (error) {
      console.error("Authentication error:", error);
      setMessage("Authentication failed. Please try again.");
    } else if (refresh_token) {
      const access_token =
        typeof window !== "undefined"
          ? localStorage.getItem("accessToken") || Cookies.get("accessToken")
          : null;

      if (!access_token) {
        console.error("No access token found");
        setMessage("Access token missing. Please try again.");
        return;
      }

      try {
        console.log("refresh_token", refresh_token);
        console.log("access_token", access_token);
        const response = await fetch(`${BACKEND_URL}/auth/add-refresh-token`, {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
            Origin: "http://localhost:3000",
          },
          body: JSON.stringify({ new_token: refresh_token }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Refresh token updated successfully:", data.message);
        setMessage("Authentication successful. Redirecting...");

        // Optional: redirect after a short delay
        setTimeout(() => {
          router.push("/amazon/dashboard");
        }, 1000);
      } catch (error) {
        console.error("Error updating refresh token:", error);
        setMessage("Failed to update token. Please try again.");
      }
    }
  }

  return (
    <div>
      {message}
      <button onClick={sendRefreshToken}>Add refresh_token</button>
    </div>
  );
}

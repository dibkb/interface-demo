"use client";
import { Logo } from "@/components/fonts/logo";
import { Google } from "@/components/icons/Google";
import Input from "@/components/login/Input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Cookies from "js-cookie";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleGoogleLogin = async () => {
    try {
      window.location.href = "http://localhost:8000/auth/google";
    } catch (err) {
      console.error("Google login error:", err);
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // Store the access token in an HTTP-only cookie
      Cookies.set("accessToken", data.access_token, {
        secure: true,
        sameSite: "strict",
        expires: 7,
      });

      // Optionally store user info
      localStorage.setItem("user", JSON.stringify({ username }));

      // Redirect to dashboard or home page
      router.push("/home/dashboard");
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <main className="grid grid-cols-10 h-[100vh]">
      <main className="col-span-4 bg-interface-palette-secondary flex items-center justify-center">
        <span className="flex flex-col gap-8 items-center justify-center">
          <h3 className="text-interface-base-black font-bold text-3xl text-center">
            Put your claims <br /> on autopilot
          </h3>
          <button className="px-12 py-4 rounded-lg bg-interface-base-black text-white text-xl font-bold">
            Join Waitlist
          </button>
        </span>
      </main>
      <main className="col-span-6 flex flex-col gap-4 items-center justify-center">
        <section className="w-[520px] flex flex-col gap-6 justify-center items-center pt-8 pb-32 px-16 rounded-[24px] shadow bg-interface-base-white">
          <Logo className="text-5xl my-8" />
          <main className="w-full flex flex-col gap-6">
            <Input
              state={username}
              setState={setUsername}
              placeholder={"Username"}
            />
            <Input
              state={password}
              setState={setPassword}
              type={"password"}
              placeholder={"Password"}
            />
            <button
              onClick={handleSubmit}
              className="text-sm font-semibold bg-interface-base-black text-interface-base-white rounded-lg py-4"
            >
              Login
            </button>
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-interface-base-black"></div>
              <span className="mx-2 text-interface-base-black font-medium text-sm">
                or
              </span>
              <div className="flex-grow border-t border-interface-base-black"></div>
            </div>
            <button
              onClick={handleGoogleLogin}
              className="text-sm font-semibold border-2 border-interface-base-black text-interface-base-black bg-interface-base-white rounded-lg py-4 flex items-center gap-3 justify-center"
            >
              <Google />
              Login with Google
            </button>
          </main>
        </section>
        <a href="" className="font-semibold text-interface-base-black">
          By continuing, you agree to Interface&apos;s <u>Terms of Service</u>{" "}
          and <u>Privacy Policy</u>.
        </a>
      </main>
    </main>
  );
}
export default LoginPage;

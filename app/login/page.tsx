"use client";
import { Logo } from "@/components/fonts/logo";
import { Google } from "@/components/icons/Google";
import Input from "@/components/login/Input";
import { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
              state={email}
              setState={setEmail}
              placeholder={"Email Address"}
            />
            <Input
              state={password}
              setState={setPassword}
              type={"password"}
              placeholder={"Password"}
            />
            <button className="text-sm font-semibold bg-interface-base-black text-interface-base-white rounded-lg py-4">
              Login
            </button>
            <div className="flex items-center w-full">
              <div className="flex-grow border-t border-interface-base-black"></div>
              <span className="mx-2 text-interface-base-black font-medium text-sm">
                or
              </span>
              <div className="flex-grow border-t border-interface-base-black"></div>
            </div>
            <button className="text-sm font-semibold border-2 border-interface-base-black text-interface-base-black bg-interface-base-white rounded-lg py-4 flex items-center gap-3 justify-center">
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

import React, { useState } from "react";
import CardLayout from "./CardLayout";
import ExclamationCircle from "../icons/ExclamationCircle";
import Checkbox from "./Checkbox";

const Deactivation = () => {
  const button = (
    <button className="text-sm font-semibold px-4 py-1 rounded-md border bg-interface-palette-error border-interface-error-300 text-interface-base-white">
      Deactivate Account
    </button>
  );
  const [confirm, setConfirm] = useState(false);
  return (
    <CardLayout text="Account Deactivation" asideNode={button}>
      <main className="flex flex-col gap-4">
        <div className="p-4 rounded-lg bg-interface-neutrals-100/50 border flex gap-4 items-center">
          <ExclamationCircle className="size-12" />
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">
              You are deactivating your account
            </h3>
            <p className="font-semibold text-interface-neutrals-600">
              For extra security this requires you to confirm your email or
              phone number.
            </p>
          </div>
        </div>
        <div
          className="flex gap-4 cursor-pointer select-none"
          onClick={() => setConfirm((p) => !p)}
        >
          <Checkbox selected={confirm} />
          <p className="font-bold text-interface-base-black">
            I confirm my account deactivation
          </p>
        </div>
      </main>
    </CardLayout>
  );
};

export default Deactivation;

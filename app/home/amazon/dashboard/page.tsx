"use client";
import ButtonInfo from "@/components/dashboard/ButtonInfo";
import CaseLogs from "@/components/dashboard/graphs/CaseLogs";
import { ReimbursementsFull } from "@/components/dashboard/graphs/ReimbursementsFull";
import { useCallback, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useSearchParams } from "next/navigation";

function AmazonDashboard() {
  const APP_ID = "amzn1.sp.solution.ecc21900-8432-423e-ad05-096f2b3c43d0";
  const [hasOpened, setHasOpened] = useState(false);
  const getAuthUrl = (appId: string, token: string) =>
    `https://sellercentral.amazon.com/apps/authorize/consent?application_id=${appId}&version=beta&state=${token}`;
  const searchParams = useSearchParams();
  const openAuthWindow = useCallback(() => {
    const access_token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken") || Cookies.get("accessToken")
        : null;

    if (!hasOpened && access_token) {
      const authUrl = getAuthUrl(APP_ID, access_token);
      window.open(authUrl, "_blank");
      setHasOpened(true);
    }
  }, [hasOpened]);

  useEffect(() => {
    const auth = searchParams.get("auth");
    if (!auth) openAuthWindow();
  }, [openAuthWindow, searchParams]);
  return (
    <main className="border rounded-md p-4 h-full overflow-scroll">
      <div className="flex justify-between gap-4">
        <ButtonInfo title={"Total Reimbursements"} amount={"₹11,34,234.82"} />
        <ButtonInfo title={"Cases Raised"} amount={"37,817"} />
      </div>
      <section className="mt-4 grid grid-cols-12 gap-y-4">
        <main className="col-span-12">
          <CaseLogs />
        </main>
        <main className="col-span-12">
          <ReimbursementsFull />
        </main>
      </section>
    </main>
  );
}
export default AmazonDashboard;

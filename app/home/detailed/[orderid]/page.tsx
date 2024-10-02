"use client";

// Grouped similar imports together
import React, { useEffect, useState } from "react";
import ReimbursedLabel from "@/components/Logs/Sidemenu/ReimbursedItems/ReimbursedLabel";
import { ButtonLabel } from "@/components/Logs/ButtonLabel";
import {
  DownloadButtonAmazon,
  DownloadButtonDrive,
  DownloadButtonUnicommece,
} from "@/components/DetailedPage/DocumentsAddedButton";

const DetailedPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // or a loading spinner, or some placeholder
  }

  return (
    <div className="border p-4 flex flex-col gap-6">
      <div className="grid grid-cols-12 gap-4 h-min">
        <section className="col-span-5 border p-4 bg-interface-neutrals-50 rounded-md flex-1">
          <p className="text-interface-neutrals-700 font-semibold text-base">
            Retrieved from Amazon
          </p>
          <table className="text-sm font-semibold my-4 flex flex-col gap-4">
            <tr className="flex items-center gap-2">
              FNSKU : <ButtonLabel text="729-3081594-6723901" />
            </tr>
            <tr className="flex items-center gap-2">
              ASIN : <ButtonLabel text="B0CLMN3PQ7" />
            </tr>
            <tr className="flex items-center gap-2">
              Fulfilment Centre : <ButtonLabel text="CAL18" />
            </tr>
            <tr className="flex items-center gap-2">
              Item total : <ButtonLabel text="UCYdnWr1M" />
            </tr>
            <tr className="flex items-center gap-2">
              Dispute Type : <ButtonLabel text="₹1,071.00" />
            </tr>
            <tr className="flex items-center gap-2">
              Status : <ReimbursedLabel>Partially reimbursed</ReimbursedLabel>
            </tr>
          </table>
        </section>

        <section className="col-span-7 border p-4 bg-interface-neutrals-50 rounded-md flex-1">
          <div className="flex items-center justify-between">
            <p className="text-interface-base-black font-semibold">
              Retrieved Supporting Documents
            </p>
            <button className="border px-4 py-1 rounded-md text-sm font-semibold">
              Add Documents
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <DownloadButtonUnicommece name={"Order Details.pdf"} />
            <DownloadButtonDrive name={"Dimensions.zip"} />
            <DownloadButtonAmazon name={"Monthly Storage Report"} />
          </div>
        </section>
      </div>

      <div className="grid grid-cols-12 gap-4 h-min">
        <section className="col-span-7 border p-4 bg-interface-neutrals-50 rounded-md flex-1">
          <p className="font-semibold">View Dispute:</p>
        </section>
        <section className="col-span-5 border p-4 bg-interface-neutrals-50 rounded-md flex-1 text-sm">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-3 w-full">
              <p>Issue Short Description :</p>
              <div className="text-interface-neutrals-600 px-4 py-2 border rounded-md bg-white w-full">
                Storage Fees overcharged
              </div>
            </div>
            <div className="flex flex-col gap-3 w-full">
              <p>Issue Description :</p>
              <div className="text-interface-neutrals-600 px-4 py-2 border rounded-md bg-white w-full flex flex-col gap-4">
                <p>Issue: Investigate the Storage Fees overcharged</p>
                <p>
                  FNSKU:- X001AO2X2L <br /> Fulfilment-centre:- BLR7 Actual item{" "}
                  <br />
                  volume: 0.0069 <br /> Amazon Item Volume Charged: 0.0091
                  <br />
                  Quantity:8 <br />
                </p>
                <p>
                  Kindly do look into the same, and issue a reimbursement for
                  incorrect storage fee.
                </p>
                <p>Looking forward to hearing back from you.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DetailedPage;

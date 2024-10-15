"use client";
import useAuthStore from "@/app/src/stores/authStore";
import useReportStore from "@/app/src/stores/reportStore";
import authotrizedApi from "@/axios/authorizedRoute";
import ArrowUpRight from "@/components/icons/ArrowUpRight";
import Loglabel from "@/components/Logs/Loglabel";
import LogThumbnail from "@/components/Logs/LogThumbnail";
import { logMessages } from "@/constants/log-messages";
import { RemovalOrder } from "@/types/amazon/removal-order-recon";
import { label } from "@/types/logLabel";
import Link from "next/link";
import { useEffect, useState } from "react";

const Homepage = () => {
  const { jwtAccessToken } = useAuthStore();
  const { setRemovalOrder, removalOrders } = useReportStore();
  useEffect(() => {
    authotrizedApi
      .get("/amazon/removal-order-recon")
      .then((response) => setRemovalOrder(response.data.data));
  }, [jwtAccessToken]);
  return (
    <div className="border h-full overflow-x-auto flex">
      {Object.entries(logMessages).map(([_key, val]) => {
        const key = _key as label;
        return (
          <div
            key={key}
            className="flex-shrink-0 border-r last:border-r-0 w-[300px] flex flex-col h-full"
          >
            <Link
              href={`logs/${val}`}
              className="h-16 border-b flex items-center justify-between px-4 group hover:bg-neutral-100 cursor-pointer"
            >
              <Loglabel type={key as label} />
              <ArrowUpRight className="size-5 text-interface-neutrals-600 invisible group-hover:visible" />
            </Link>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              {removalOrders?.map((ele) => {
                if (ele.status.toLowerCase() === key) {
                  return (
                    <LogThumbnail
                      key={ele.id}
                      title={ele.order_disposition}
                      content={ele.order_id}
                    />
                  );
                }
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Homepage;

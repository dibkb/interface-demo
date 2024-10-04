"use client";
import React, { useEffect, useState } from "react";
import CardLayout from "./CardLayout";
import SmallButton from "./SmallButton";
import Checkbox from "./Checkbox";

const notificationData = [
  {
    index: 1,
    title: "Billing Updates",
  },
  {
    index: 2,
    title: "Case Raised",
  },
  {
    index: 3,
    title: "Case Reimbursed",
  },
  {
    index: 4,
    title: "Action Required",
  },
];
interface NotificationSelected {
  index: number;
  app: boolean;
  email: boolean;
}
const Notifications = () => {
  const [isClientSide, setIsClientSide] = useState(false);

  const [notificationSelected, setNotificationSelected] = useState<
    NotificationSelected[]
  >([
    { index: 1, app: false, email: false },
    { index: 2, app: false, email: false },
    { index: 3, app: false, email: false },
    { index: 4, app: false, email: false },
  ]);
  useEffect(() => {
    setIsClientSide(true);
  }, []);
  if (!isClientSide) return null;

  const buttonGroup = (
    <div className="flex gap-3">
      <SmallButton text="Undo Changes" variant="secondary" />
      <SmallButton text={"Save Changes"} />
    </div>
  );
  function selectNotificationHandler(index: number, type: "app" | "email") {
    setNotificationSelected((prev) => {
      const filter = prev.find((p) => p.index === index);
      if (!filter) return prev;
      return [
        ...prev.filter((p) => p.index !== index),
        { ...filter, [type]: !filter[type] },
      ];
    });
  }
  return (
    <CardLayout text="Notifications" asideNode={buttonGroup}>
      <main className="flex flex-col">
        {notificationData.map((n) => {
          const item = notificationSelected.filter(
            (noti) => noti.index === n.index
          )[0];
          return (
            <div
              key={n.index}
              className="font-bold text-interface-base-black flex items-center justify-between py-3 border-b rounded-md"
            >
              <h3>{n.title}</h3>
              <span className="flex items-center gap-4">
                <button
                  className="flex items-center gap-2"
                  onClick={() => selectNotificationHandler(n.index, "app")}
                >
                  <Checkbox selected={item.app} />
                  <p>App</p>
                </button>
                <button
                  className="flex items-center gap-2"
                  onClick={() => selectNotificationHandler(n.index, "email")}
                >
                  <Checkbox selected={item.email} />
                  <p>Email</p>
                </button>
              </span>
            </div>
          );
        })}
      </main>
    </CardLayout>
  );
};

export default Notifications;

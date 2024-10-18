import type { Metadata } from "next";

import "./globals.css";
import { manropeLocal } from "@/components/fonts";

export const metadata: Metadata = {
  title: "Get Interface",
  description: "Get Interface",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manropeLocal.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

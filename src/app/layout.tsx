import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import * as React from "react";

import clsx from "clsx";

import { Footer } from "@/components/Footer";

import "./globals.css";

const poppinsRegular = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins-regular",
});
const poppinsSemibold = Poppins({
  weight: "600",
  subsets: ["latin"],
  variable: "--font-poppins-semibold",
});

export const metadata: Metadata = {
  title: "BigDevSoon - Business Card Project",
  other: {
    bds: "<bds />",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "bg-background text-black-87 body",
          poppinsRegular.className,
          poppinsRegular.variable,
          poppinsSemibold.variable,
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}

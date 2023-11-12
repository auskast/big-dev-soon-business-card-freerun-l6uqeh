import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import * as React from "react";

import clsx from "clsx";

import { BDS } from "@/components/BDS";
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
          "bg-background body",
          poppinsRegular.className,
          poppinsRegular.variable,
          poppinsSemibold.variable,
        )}
      >
        {children}
        <Footer />
      </body>
      <BDS />
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "@/app/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import {MovingBackground} from "@/app/components/movingBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //  33475b
    <html lang="en">
        <body className={inter.className} style={{backgroundColor:"black"}}>{children}</body>
    </html>
  );
}

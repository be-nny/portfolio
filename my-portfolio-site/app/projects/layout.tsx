import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //  33475b
    <html lang="en">
        {/*#141920*/}
        <body className={inter.className} style={{backgroundColor:"black"}}>{children}</body>
    </html>
  );
}

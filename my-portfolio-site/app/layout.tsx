import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {MyProvider} from "@/app/components/MyContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to My Website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    //  33475b
    <html lang="en">
        <body className={inter.className} style={{backgroundColor:"#141920"}}>{children}</body>
    </html>
  );
}

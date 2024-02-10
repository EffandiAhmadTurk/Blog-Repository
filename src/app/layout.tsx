import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blog Website",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     {/* eslint-disable react/jsx-no-comment-textnodes */}
     <body className={inter.className}>{children}</body>
      {/* eslint-enable react/jsx-no-comment-textnodes */}
    </html>
  );
}

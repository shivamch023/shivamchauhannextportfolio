import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import WebApp from "./components/WebApp/WebApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shivam Chauhan Portfolio",
  description: "Created by Shivam chauhan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WebApp>{children}</WebApp>
      </body>
    </html>
  );
}

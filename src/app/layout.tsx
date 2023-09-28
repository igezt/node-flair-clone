import { AppBar } from "@/components/AppBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NodeFlair clone",
  description:
    "A clone of NodeFlair's website done as part of their internship assessment process.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <AppBar />
        {children}
      </body>
    </html>
  );
}

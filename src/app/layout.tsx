import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { sansMono } from "./fonts";
import { TooltipSetup } from "@/lib/tooltip";
import { ToastSetup } from "@/lib/toast";

export const metadata: Metadata = {
  title: "Abdelrahman | portfolio",
  description: "Portfolio de Abdelrahman",
  icons: {
    icon: [
      { url: '/me-32.jpeg', sizes: '32x32' },
      { url: '/me-192.jpeg', sizes: '192x192' },
    ],
    apple: [
      { url: '/me-180.jpeg', sizes: '180x180' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={sansMono.className}>
        {children}
        <TooltipSetup />
        <ToastSetup />
      </body>
    </html>
  );
}

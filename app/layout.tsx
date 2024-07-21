import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfg } from "@/config/stile";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfg.name,
    template: `%s | ${siteConfg.name}`,
  },
  description: siteConfg.description,
  icons: [
    {
      url: "../public/images/logo.png",
      href: "../public/images/logo.png",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

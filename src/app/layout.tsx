import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import StarField from "@/components/layout/StarField";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wagner Monteiro — Full Stack Developer",
  description: "Full Stack Developer. TypeScript ecosystem — React, Node, Nest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${syne.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <StarField />
        {children}
      </body>
    </html>
  );
}
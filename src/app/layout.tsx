import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next-Blog",
  description: "Next.jsでブログの作成",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${inter.className} container mx-auto bg-slate-700 text-slate-50`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

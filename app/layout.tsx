import { Metadata } from "next";
import "./styles/globals.css";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Studio",
  description: "Unleashing the magic of illustration and animation",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

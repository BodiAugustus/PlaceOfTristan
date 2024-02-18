import "./globals.css";
import Head from "next/head";
import { lato } from "./ui/fonts";

export const metadata = {
  title: "Tristan Nettles Webpage",
  description:
    "The personal webpage of Tristan Nettles, the full stack web3 developer, DeFi Consultant, and published author.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={`${lato.className} antialiased`}>{children}</body>
    </html>
  );
}

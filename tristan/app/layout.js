import "./globals.css";
import { lato } from "./ui/fonts";

export const metadata = {
  title: "Tristan Nettles Webpage",
  description:
    "The personal webpage of Tristan Nettles, the full stack web3 developer, DeFi Consultant, and published author.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lato.className} antialiased`}>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {children}
      </body>
    </html>
  );
}

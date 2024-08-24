import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "./ui/navbar";
import Footer from "./ui/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muebles",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
          {children}
        <Footer />
      </body>
    </html>
  );
}

"use client";
import { NavigationBar } from "../components/navigation/NavigationBar";
import { SessionProvider } from "next-auth/react";
import Image from "next/image";
import logoWhiteFont from "../public/logoWhiteFont.png";
import "./globals.css";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body className="overflow-x-hidden">
          <header className="flex top-0 bg-black text-white w-screen m-auto flex-row justify-around fixed">
            <div className="flex">
              <Image
                src={logoWhiteFont}
                alt="logoWhiteFont"
                width={100}
                height={100}
              />
            </div>
            <NavigationBar />
            <div className="flex items-center">
              <Image
                src={logoWhiteFont}
                alt="profilePicture"
                width={100}
                height={100}
              />
            </div>
          </header>
          {children}
        </body>
      </SessionProvider>
    </html>
  );
}

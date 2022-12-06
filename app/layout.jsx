import { NavigationBar } from "../components/navigation/NavigationBar";
import Image from "next/image";
import logoWhiteFont from "../public/logoWhiteFont.png";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        {/* Navigation Links */}
        <header className="flex top-0 absolute bg-black text-white w-screen m-auto flex-row justify-around">
          <div className="flex">
            <Image
              src={logoWhiteFont}
              alt="logoWhiteFont"
              width={100}
              height={100}
            />
          </div>
          <NavigationBar />
          <Image
            src={logoWhiteFont}
            alt="logoWhiteFont"
            width={100}
            height={100}
          />
          {/* black profile photo */}
          {/* <Image
            src={profile}
            alt="profilePicture"
            width={100}
            height={100}
            priority
          /> */}
        </header>

        {children}
      </body>
    </html>
  );
}

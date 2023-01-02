import { NavigationBar } from "../components/navigation/NavigationBar";
import Image from "next/image";
import logoWhiteFont from "../public/logoWhiteFont.png";
import profile from "../public/profile_photo.png";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="overflow-x-hidden">
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
          <div className="flex items-center">
            <Image
              src={profile}
              alt="profilePicture"
              priority
              className="rounded-full w-16 h-16 "
            />
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}

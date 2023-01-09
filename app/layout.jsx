import { NavigationBar } from "../components/navigation/NavigationBar";
import Image from "next/image";
import logoWhiteFont from "../public/logoWhiteFont.png";
import profile from "../public/profile_photo.png";
import "./globals.css";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden">
        <SessionProvider session={session}>
          {/* Navigation Links */}
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
                src={profile}
                alt="profilePicture"
                className="rounded-full w-16 h-16 "
              />
            </div>
          </header>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}

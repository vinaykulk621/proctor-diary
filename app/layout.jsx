import NavBar from "../components/navigation/NavBar";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {/* Navigation Links */}
        <header className="top-0 absolute">
          <nav className="flex space-x-5 px-4">
            <NavBar href="/" children="Login" />
            <NavBar href="/home" children="Home" />
            <NavBar href="/profile" children="Profile" />
            <NavBar
              href="/course-registration"
              children="course-registration"
            />
            <NavBar href="/activity-points" children="activity-points" />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}

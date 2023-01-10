import { signIn, signOut, useSession } from "next-auth/react";
import NavBar from "./NavBar";

export function NavigationBar({}) {
  const { data: session } = useSession();
  return (
    <nav className="flex space-x-5 items-center text-[20px]">
      <NavBar href="/" children="Home" />
      <NavBar href="/facculty-login" children={"Facculty-login"} />
      <NavBar href="/student-login" children={"Student-login"} />
      <NavBar href="/course-registration" children="Course-registration" />
      <NavBar href="/activity-points" children="Activity-points" />
      <NavBar href="/profile" children="Profile" />
      {session?.user ? (
        <>
          <p className="text-sky-600"> {session.user.email}</p>
          <button className="text-red-500" onClick={() => signOut()}>
            Logout
          </button>
        </>
      ) : (
        <button className="text-green-600" onClick={() => signIn()}>
          Login
        </button>
      )}
    </nav>
  );
}

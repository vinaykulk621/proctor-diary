import NavBar from "./NavBar";

export function NavigationBar({}) {
  return (
    <nav className="flex space-x-5 pt-10 text-[20px]">
      <NavBar href="/" children="Home" />
      <NavBar href="/facculty-login" children="facculty-login" />
      <NavBar href="/student-login" children="student-login" />
      <NavBar href="/course-registration" children="course-registration" />
      <NavBar href="/activity-points" children="activity-points" />
      <NavBar href="/profile" children="Profile" />
    </nav>
  );
}

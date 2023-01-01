import NavBar from "./NavBar";

export function NavigationBar({}) {
  return (
    <nav className="flex space-x-5 pt-10 text-[20px]">
      <NavBar href="/" children="Home" />
      <NavBar href="/facculty-login" children="Facculty-login" />
      <NavBar href="/student-login" children="Student-login" />
      <NavBar href="/course-registration" children="Course-registration" />
      <NavBar href="/activity-points" children="Activity-points" />
      <NavBar href="/profile" children="Profile" />
    </nav>
  );
}

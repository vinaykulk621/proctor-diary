import NavBar from "./NavBar";

export async function NavigationBar({}) {
  let loggedIn = false;
  async function handle(loggedIn) {
    return (loggedIn = await fetch("/api/isLoggedIn"));
  }
  loggedIn = handle(loggedIn);
  return (
    <nav className="flex space-x-5 items-center text-[20px]">
      <NavBar href="/" children="Home" />
      <NavBar
        href={loggedIn ? "/profile" : "/facculty-login"}
        children="Facculty-login"
      />
      <NavBar
        href={loggedIn ? "/profile" : "/student-login"}
        children="Student-login"
      />
      <NavBar href="/course-registration" children="Course-registration" />
      <NavBar href="/activity-points" children="Activity-points" />
      <NavBar href="/profile" children="Profile" />
    </nav>
  );
}

import axios from "axios";
import NavBar from "./NavBar";

export async function NavigationBar({}) {
  async function handle() {
    try {
      return await axios.get("/api/isLoggedIn");
    } catch (e) {
      console.log(e);
    }
  }
  let loggedIn = handle();

  return (
    <nav className="flex space-x-5 items-center text-[20px]">
      <NavBar href="/" children="Home" />
      <NavBar
        href="/facculty-login"
        children={loggedIn ? "Facculty-logout" : "Facculty-login"}
      />
      <NavBar
        href="/student-login"
        children={loggedIn ? "Student-logut" : "Student-login"}
      />
      <NavBar href="/course-registration" children="Course-registration" />
      <NavBar href="/activity-points" children="Activity-points" />
      <NavBar href="/profile" children="Profile" />
    </nav>
  );
}

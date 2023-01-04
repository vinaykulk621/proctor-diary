"use client";
import FaccultyLoginForm from "../../components/login/faccultyLogin/FaccultyLoginForm";
import { useRouter } from "next/navigation";
import axios from "axios";

export default async function StudentLogin() {
  const router = useRouter();
  try {
    const gateWay = await axios.get("/api/isLoggedIn");
    if (gateWay["data"]["message"]) {
      router.push("/profile");
    } else {
      return <FaccultyLoginForm />;
    }
  } catch (e) {
    console.log(e);
  }
}

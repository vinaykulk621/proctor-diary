"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import StudentLoginForm from "../../components/login/studentLogin/StudentLoginForm";

export default async function StudentLogin() {
  const router = useRouter();
  try {
    const gateWay = await axios.get("/api/isLoggedIn");
    const gateOpen = gateWay["data"]["message"];
    if (gateOpen) {
      router.push("/profile");
    } else {
    }
  } catch (e) {
    console.log(e);
  }
  return <StudentLoginForm />;
}

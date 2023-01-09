"use client";
import axios from "axios";
import { useState } from "react";
import { ProfilePalleteWithNames } from "./ProfilePalleteWithNames";

export function Profiles({}) {
  const [studentName, setStudentName] = useState("");
  const [poctorName, setPoctorName] = useState("");

  async function logoutPlease() {
    const res = await axios.post("/api/logout");
    const ans = await res.json();
    if (ans.loggedOut === true) {
      ans.reload();
    }
  }

  async function handleName() {
    try {
      const res = await fetch("/api/getStudent");
      const ans = await res.json();
      setStudentName(ans["name"]);
      setPoctorName(ans["proctor"]);
    } catch (e) {
      console.log(e);
    }
  }

  handleName();
  return (
    <div className="flex flex-col space-y-10 pt-10">
      <ProfilePalleteWithNames width={500} height={500} name={studentName} />
      <ProfilePalleteWithNames width={500} height={500} name={poctorName} />
      <button
        className="px-5 py-3 w-32 bg-red-500 text-white float-right mx-5 rounded-lg"
        onClick={logoutPlease}
      >
        Logout
      </button>
    </div>
  );
}

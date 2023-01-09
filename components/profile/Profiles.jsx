"use client";
import { serialize } from "cookie";
import { useState } from "react";
import { ProfilePalleteWithNames } from "./ProfilePalleteWithNames";

export function Profiles({}) {
  const [studentName, setStudentName] = useState("");
  const [poctorName, setPoctorName] = useState("");

  async function logoutPlease(params) {
    await fetch("/api/logut");
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
      <form onSubmit={logoutPlease}>
        <button className="px-5 py-3 w-32 bg-red-500 text-white float-right mx-5 rounded-lg">
          Logout
        </button>
      </form>
    </div>
  );
}

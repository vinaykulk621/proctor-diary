"use client";
import { useState } from "react";
import { ProfilePalleteWithNames } from "./ProfilePalleteWithNames";

export function Profiles({}) {
  const [studentName, setStudentName] = useState("");

  async function handleName() {
    try {
      const res = await fetch("/api/getStudent");
      const ans = await res.json();
      setStudentName(ans["name"]);
    } catch (e) {
      console.log(e);
    }
  }

  handleName();
  return (
    <div className="flex flex-col space-y-10 pt-10">
      <ProfilePalleteWithNames width={500} height={500} name={studentName} />
      <ProfilePalleteWithNames width={500} height={500} name={"Proctor name"} />
    </div>
  );
}

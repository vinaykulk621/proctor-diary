"use client";
import axios from "axios";
import { useState } from "react";
import { ProfilePalleteWithNames } from "./ProfilePalleteWithNames";
export function Profiles({}) {
  const [studentName, setStudentName] = useState("");

  async function handleName() {
    try {
      const res = await axios.get("/api/student/getName");
      setStudentName(res["data"]["studentName"]);
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

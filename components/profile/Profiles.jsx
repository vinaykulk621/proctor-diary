"use client";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { ProfilePalleteWithNames } from "./ProfilePalleteWithNames";

export function Profiles({}) {
  const [studentName, setStudentName] = useState("");
  const [poctorName, setPoctorName] = useState("");
  const { data: session } = useSession();

  async function handleName() {
    try {
      const res = await fetch("http://localhost:3000/api/getStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session.user.email,
        }),
      });
      const ans = await res.json();
      setStudentName(ans.name);
      setPoctorName(ans.proctor);
    } catch (e) {
      console.log(e);
    }
  }

  handleName();

  return (
    <div className="flex flex-col space-y-10 pt-10">
      <ProfilePalleteWithNames width={500} height={500} name={studentName} />
      <ProfilePalleteWithNames width={500} height={500} name={poctorName} />
    </div>
  );
}

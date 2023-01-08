"use client";
import { useState } from "react";
import { Tablets } from "../global/Tablet";

export function StudentDetails({}) {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [personalEmail, setPersonalEmail] = useState("");
  const [dob, setDob] = useState("");
  const [blood, setBlood] = useState("");
  const [addmission, setAddmission] = useState("");
  const [local, setLocal] = useState("");
  const [permanent, setPermanent] = useState("");

  async function handleStudent() {
    try {
      const res = await fetch("/api/getStudent");
      const ans = await res.json();
      setNumber(ans["contact"]);
      setEmail(ans["email"]);
      setPersonalEmail(ans["personalEmail"]);
      setDob(ans["dob"]);
      setBlood(ans["bloodGroup"]);
      setAddmission(ans["admissionType"]);
      setLocal(ans["localAddress"]);
      setPermanent(ans["permanentAddress"]);
    } catch (e) {
      console.log(e);
    }
  }
  handleStudent();

  return (
    <div className="flex flex-col space-y-10 text-center">
      <div className="flex flex-row space-x-10">
        <Tablets content={number} label="Phone-Number" />
        <Tablets content={email} label="College-Email" />
        <Tablets content={personalEmail} label="Personal-Email" />
        <Tablets content={dob} label="DOB" />
      </div>
      <div className="flex flex-row space-x-10">
        <Tablets content={blood} label="Blood-Group" />
        <Tablets content={addmission} label="Admission-Type" />
        <Tablets content={local} label="Local-Address" />
        <Tablets content={permanent} label="Permanent-Address" />
      </div>
    </div>
  );
}

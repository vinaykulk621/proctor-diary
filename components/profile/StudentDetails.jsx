"use client";
import axios from "axios";
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
      const res = await axios.get("http://localhost:3000/api/getStudent");
      setNumber(res["data"]["student"]["contact"]);
      setEmail(res["data"]["student"]["email"]);
      setPersonalEmail(res["data"]["student"]["personalEmail"]);
      setDob(res["data"]["student"]["dob"]);
      setBlood(res["data"]["student"]["bloodGroup"]);
      setAddmission(res["data"]["student"]["admissionType"]);
      setLocal(res["data"]["student"]["localAddress"]);
      setPermanent(res["data"]["student"]["permanentAddress"]);
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

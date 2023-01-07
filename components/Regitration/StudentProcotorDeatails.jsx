"use client";
import { useState } from "react";
import { Tablets } from "../global/Tablet";
import { ProfilePallete } from "../global/profilePallete";
import axios from "axios";

export function StudentProcotorDeatails({}) {
  const [usn, setUSN] = useState("");
  const [studentName, setStudentName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [section, setSection] = useState("");
  async function handleStudent() {
    try {
      const res = await fetch("/api/getStudent");
      setNumber(res["data"]["student"]["contact"]);
      setStudentName(res["data"]["student"]["name"]);
      setUSN(res["data"]["student"]["usn"]);
      setEmail(res["data"]["student"]["email"]);
      setDepartment(res["data"]["student"]["department"]);
      setSemester(res["data"]["student"]["semester"]);
      setSection(res["data"]["student"]["section"]);
    } catch (e) {
      console.log(e);
    }
  }
  handleStudent();
  return (
    <div className="flex flex-row space-x-16 text-center pb-10 justify-evenly ">
      <div className="flex flex-col space-y-4">
        <Tablets content={usn} label="USN" />
        <Tablets content={studentName} label="Student-Name" />
        <Tablets content={email} label="College-Email" />
        <Tablets content={department} label="Department" />
        <Tablets content={number} label="Phone-Number" />
      </div>
      <div className="flex flex-col space-y-4">
        <Tablets content={semester} label="Semester" />
        <Tablets content={section} label="Section" />
      </div>
      <ProfilePallete width={250} height={250} />
      <div className="flex flex-col space-y-4">
        <Tablets content={"Proctor Name"} />
        <Tablets content={"Proctor Email"} />
        <Tablets content={"Department"} />
        <Tablets content={"Mobile Number"} />
      </div>
    </div>
  );
}

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

  async function handleNumber() {
    try {
      const res = await axios.get("/api/student/getContact");
      setNumber(res["data"]["studentContact"]);
    } catch (e) {
      console.log(e);
    }
  }
  async function handleEmail() {
    try {
      const res = await axios.get("/api/student/getEmail");
      setEmail(res["data"]["studentEmail"]);
    } catch (e) {
      console.log(e);
    }
  }
  async function handlePersonalEmail() {
    try {
      const res = await axios.get("/api/student/getPersonalEmail");
      setPersonalEmail(res["data"]["studentPersonalEmail"]);
    } catch (e) {
      console.log(e);
    }
  }
  async function handleDob() {
    try {
      const res = await axios.get("/api/student/getDob");
      setDob(res["data"]["studentDob"]);
    } catch (e) {
      console.log(e);
    }
  }
  async function handleBlood() {
    try {
      const res = await axios.get("/api/student/getBlood");
      setBlood(res["data"]["studentBlood"]);
    } catch (e) {
      console.log(e);
    }
  }
  async function handleAdmission() {
    try {
      const res = await axios.get("/api/student/getAdmission");
      setAddmission(res["data"]["studentAdmission"]);
    } catch (e) {
      console.log(e);
    }
  }
  async function handleLocal() {
    try {
      const res = await axios.get("/api/student/getLocal");
      setLocal(res["data"]["studentLocal"]);
    } catch (e) {
      console.log(e);
    }
  }
  async function handlePermanent() {
    try {
      const res = await axios.get("/api/student/getPermanent");
      setPermanent(res["data"]["studentPermanent"]);
    } catch (e) {
      console.log(e);
    }
  }

  handleNumber();
  handleEmail();
  handlePersonalEmail();
  handleDob();
  handleBlood();
  handleAdmission();
  handleLocal();
  handlePermanent();

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

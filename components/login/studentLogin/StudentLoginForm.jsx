"use client";
import { PasswordInput } from "../utils/PasswordInput";
import { useState } from "react";
import Image from "next/image";
import USNInput from "../../global/USNInput";
import logoWhiteFont from "../../../public/logoWhiteFont.png";
import EmailIdInput from "../utils/EmailIdInput";
import axios from "axios";

export default function StudentLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usn, setUsn] = useState("");

  async function loginHandler() {
    const credentials = { usn, email, password };
    try {
      const res = await axios.post("/api/login", credentials);
      const response = await res.json();
      console.log(response);
      if (!response.err) {
        console.log(response);
        document.cookie = `email=${email};expires=${new Date().getHours * 50}`;
        console.log(getCookie("email"));
      } else {
        alert("Something went wrong");
      }
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
    console.log("Something went wrong");
  }
  return (
    <form
      className="bg-yellow-400 flex w-screen h-screen"
      onSubmit={loginHandler}
    >
      <div className="flex flex-1 p-5 flex-col items-center justify-center box-border ">
        <div className=" border-2 border-black bg-black justify-center items-center flex flex-col rounded-md space-y-2">
          <Image
            src={logoWhiteFont}
            alt="logoWhiteFont"
            width={100}
            height={100}
          />
          <USNInput usn={usn} setUsn={setUsn} />
          <EmailIdInput email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
          <button
            type="submit"
            className="bg-green-400 w-16 items-center text-center rounded-sm"
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
}

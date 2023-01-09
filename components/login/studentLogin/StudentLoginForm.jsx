"use client";
import { PasswordInput } from "../utils/PasswordInput";
import { useState } from "react";
import Image from "next/image";
import USNInput from "../../global/USNInput";
import logoWhiteFont from "../../../public/logoWhiteFont.png";
import EmailIdInput from "../utils/EmailIdInput";
export default function StudentLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usn, setUSN] = useState("");

  async function loginHandler() {
    try {
      const res = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (res.err === true) {
        alert("Something went wrong");
      } else {
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
    }
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
          <USNInput usn={usn} />
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

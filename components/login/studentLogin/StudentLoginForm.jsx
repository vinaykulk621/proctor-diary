"use client";
import { PasswordInput } from "../utils/PasswordInput";
import { useState } from "react";
import Image from "next/image";
import logoWhiteFont from "../../../public/logoWhiteFont.png";
import EmailIdInput from "../utils/EmailIdInput";
import { signIn } from "next-auth/react";

export default function StudentLoginForm() {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [usn, setUsn] = useState("");

  async function loginHandler(e) {
    e.preventDefault();

    const result = await signIn("credentials", {
      email: Email,
      password: password,
      redirect: true,
      callbackUrl: "/profile",
    });
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
          {/* <USNInput usn={usn} setUsn={setUsn} /> */}
          <EmailIdInput email={Email} setEmail={setEmail} />
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

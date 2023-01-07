"use client";
import { SubmitButton } from "../utils/SubmitButton";
import { PasswordInput } from "../utils/PasswordInput";
import { useState } from "react";
import EmailIdInput from "../utils/EmailIdInput";
import Image from "next/image";
import logoWhiteFont from "../../../public/logoWhiteFont.png";

export default function FaccultyLoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="bg-yellow-400 flex w-screen h-screen">
      <div className="flex flex-1 p-5 flex-col items-center justify-center box-border ">
        <div className=" border-2 border-black bg-black justify-center items-center flex flex-col rounded-md space-y-2">
          <Image
            src={logoWhiteFont}
            alt="logoWhiteFont"
            width={100}
            height={100}
          />
          <EmailIdInput email={email} setEmail={setEmail} />
          <PasswordInput password={password} setPassword={setPassword} />
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}

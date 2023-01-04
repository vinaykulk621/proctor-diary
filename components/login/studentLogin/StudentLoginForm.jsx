"use client";
import { SubmitButton } from "../utils/SubmitButton";
import { PasswordInput } from "../utils/PasswordInput";
import { useState } from "react";
import Image from "next/image";
import USNInput from "../../global/USNInput";
import logoWhiteFont from "../../../public/logoWhiteFont.png";
import EmailIdInput from "../utils/EmailIdInput";
import axios from "axios";
{
  /* <form action="/api/register" method="post">
  <label>EMail Address</label>
  <input type="email" name="email" placeholder="Type your email"></input>
  <label>Pasword</label>
  <input
    type="password"
    name="password"
    placeholder="Type your password"
  ></input>
  <input type="submit" value="Register"></input>
</form> */
}
const StudentLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usn, setUSN] = useState("");

  async function loginHandler() {
    await fetch("/api/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  }
  return (
    <>
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
              priority
            />
            <USNInput usn={usn} setUSN={setUSN} />
            <EmailIdInput email={email} setEmail={setEmail} />
            <PasswordInput password={password} setPassword={setPassword} />
            <SubmitButton />
          </div>
        </div>
      </form>
    </>
  );
};

export default StudentLoginForm;

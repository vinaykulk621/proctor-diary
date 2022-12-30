"use client";
import { SubmitButton } from "../utils/SubmitButton";
import { PasswordInput } from "../utils/PasswordInput";
import EmailIdInput from "../utils/EmailIdInput";
import { useRef } from "react";
import Image from "next/image";
import logoWhiteFont from "../../../public/logoWhiteFont.png";

const FaccultyLoginForm = () => {
  const email = useRef();
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(email.current.value);
    console.log(password.current.value);
  };

  return (
    <form
      className="bg-blue-400 flex w-screen h-screen z-0"
      onSubmit={submitHandler}
    >
      <div className="flex flex-1 p-5 flex-col items-center justify-center box-border">
        <div className=" border-2 border-black bg-gray-700 justify-center items-center flex flex-col">
          <Image
            src={logoWhiteFont}
            alt="chumma"
            width={100}
            height={100}
            priority
          />
          <EmailIdInput emailRef={email} />
          <PasswordInput passwordRef={password} />
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default FaccultyLoginForm;

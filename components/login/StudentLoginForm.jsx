"use client";
import { SubmitButton } from "./SubmitButton";
import { PasswordInput } from "./PasswordInput";
import { useRef } from "react";
import Image from "next/image";
import USNInput from "./USNInput";
import logoWhiteFont from "../../public/logoWhiteFont.png";

const StudentLoginForm = () => {
  const USN = useRef();
  const password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(USN.current.value);
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
            alt="logoWhiteFont"
            width={100}
            height={100}
            priority
          />
          <USNInput USNRef={USN} />
          <PasswordInput passwordRef={password} />
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default StudentLoginForm;

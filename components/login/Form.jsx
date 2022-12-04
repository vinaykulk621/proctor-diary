"use client";
import { SubmitButton } from "./SubmitButton";
import { PasswordInput } from "./PasswordInput";
import EmailIdInput from "./EmailIdInput";
import { useRef } from "react";
import Image from "next/image";

const Form = () => {
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
            src={
              "https://mdb-community.s3.amazonaws.com/common/default-banner-img.png"
            }
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

export default Form;

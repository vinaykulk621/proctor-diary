"use client";
import { SubmitButton } from "./SubmitButton";
import { PasswordInput } from "./PasswordInput";
import EmailIdInput from "./EmailIdInput";
import { useRef } from "react";

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
      className="bg-blue-400 flex w-screen h-screen"
      onSubmit={submitHandler}
    >
      <div className="flex flex-1 p-5 flex-col items-center justify-center">
        <div className=" border-2 border-black bg-gray-700 justify-center items-center flex flex-col p-2">
          <EmailIdInput emailRef={email} />
          <PasswordInput passwordRef={password} />
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default Form;

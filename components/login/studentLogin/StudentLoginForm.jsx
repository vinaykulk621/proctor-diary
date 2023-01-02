"use client";
import { SubmitButton } from "../utils/SubmitButton";
import { PasswordInput } from "../utils/PasswordInput";
import { useRef } from "react";
import Image from "next/image";
import USNInput from "../../global/USNInput";
import logoWhiteFont from "../../../public/logoWhiteFont.png";
import { useRouter } from "next/navigation";
import axios from "axios";

const StudentLoginForm = () => {
  // REFS's
  const USN = useRef();
  const password = useRef();

  // Authentication
  async function Authenticate(e) {
    e.preventDefault();

    const userUSN = USN.current.value;
    const userpswd = password.current.value;
    const credentials = { userUSN, userpswd };
    // if (authMe(userUSN, userpswd)) {
    //   router.push("/profile");
    // }
    try {
      const user = await axios.post("pages/api/login.js", credentials);
      console.log(user);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <form
      className="bg-blue-400 flex w-screen h-screen"
      onSubmit={Authenticate}
    >
      <div className="flex flex-1 p-5 flex-col items-center justify-center box-border ">
        <div className=" border-2 border-black bg-gray-700 justify-center items-center flex flex-col rounded-md space-y-2">
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

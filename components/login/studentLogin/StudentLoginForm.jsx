"use client";
import { SubmitButton } from "../utils/SubmitButton";
import { PasswordInput } from "../utils/PasswordInput";
import Wrapper from "../../../components/global/Wrapper";
import Image from "next/image";
import USNInput from "../../global/USNInput";
import logoWhiteFont from "../../../public/logoWhiteFont.png";
import EmailIdInput from "../utils/EmailIdInput";

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
  return (
    <form
      className="bg-blue-400 flex w-screen h-screen"
      action="/api/login"
      method="GET"
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
          <USNInput />
          <EmailIdInput />
          <PasswordInput />
          <SubmitButton />
        </div>
      </div>
    </form>
  );
};

export default StudentLoginForm;

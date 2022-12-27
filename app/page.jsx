"use client";
import { Proctor } from "../components/home/proctor";
import { Student } from "../components/home/student";
import Wrapper from "../components/global/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="block">
        <h1 className="uppercase text-3xl font-bold text-red-700 p-2 pl-8 ">
          Roles and Responsibilty
        </h1>
        <Proctor />

        <Student />
      </div>
    </Wrapper>
  );
}

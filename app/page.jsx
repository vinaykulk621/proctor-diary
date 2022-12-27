"use client";
import { ProctorGuideLines } from "../components/home/guideLines/proctorGuideLines";
import { Proctor } from "../components/home/rolesAndResponsibility/proctor";
import { Student } from "../components/home/rolesAndResponsibility/student";
import Wrapper from "../components/global/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="uppercase text-3xl font-bold text-red-700 pl-8 ">
            Roles and Responsibilty
          </h1>
          <Proctor />
          <Student />
        </div>

        <div className="flex flex-col">
          <h1 className="uppercase text-3xl font-bold text-red-700 pl-8 pt-40 border-b-2 border-red-400">
            guidelines for proctors
          </h1>
          <ProctorGuideLines />
        </div>
      </div>
    </Wrapper>
  );
}

"use client";
import { ProctorGuideLines } from "../components/home/guideLines/proctorGuideLines";
import { Proctor } from "../components/home/rolesAndResponsibility/proctor";
import { Student } from "../components/home/rolesAndResponsibility/student";
import { LeftSideCards } from "../components/profile/LeftSideCards";
import { RightSideCards } from "../components/profile/RightSideCards";
import Wrapper from "../components/global/Wrapper";
import laptopBG from "../public/laptopBG.webp";
import Image from "next/image";

export default function Home() {
  return (
    <Wrapper>
      <div className="flex flex-1 justify-evenly mt-20">
        <div className="flex h-auto bg-yellow-400 mr-4 ml-3 flex-1 rounded-lg break-words">
          <LeftSideCards />
          <RightSideCards />
        </div>
        <div>
          <Image src={laptopBG} className="rounded-lg w-auto h-auto" />
        </div>
      </div>

      <div className="h-28"></div>

      <div className="flex flex-col ">
        <div className="flex flex-col h-screen">
          <h1 className="uppercase text-3xl font-bold text-red-700 pl-8 ">
            Roles and Responsibilty
          </h1>
          <Proctor />
          <Student />
        </div>

        {/* <div className="border-t-8 border-yellow-400"></div> */}

        <div className="flex flex-col h-screen">
          <h1 className="uppercase text-3xl font-bold text-red-700 pl-8 border-b-2 border-red-400">
            guidelines for proctors
          </h1>
          <ProctorGuideLines />
        </div>
      </div>
    </Wrapper>
  );
}

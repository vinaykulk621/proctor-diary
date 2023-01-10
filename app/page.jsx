"use client";
import { FirstSection } from "../components/home/firstSection";
import { GuideLinesFinalContainer } from "../components/home/guideLines/GuideLinesFinalContainer";
import { RolesFinalContainer } from "../components/home/rolesAndResponsibility/RolesFinalContainer";
import Wrapper from "../components/global/Wrapper";
import laptopBG from "../public/laptopBG.webp";
import { useSession } from "next-auth/react";

export default function Home() {
  return (
    <Wrapper>
      <FirstSection laptopBG={laptopBG} />
      <div className="h-28" />
      <RolesFinalContainer />
      <div className="border-b-8 border-yellow-400 mb-20 mt-20" />
      <GuideLinesFinalContainer />
    </Wrapper>
  );
}

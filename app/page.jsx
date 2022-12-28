"use client";
import { FirstSection } from "../components/home/firstSection";
import { GuideLinesFinalContainer } from "../components/home/guideLines/GuideLinesFinalContainer";
import { RolesFinalContainer } from "../components/home/rolesAndResponsibility/RolesFinalContainer";
import Wrapper from "../components/global/Wrapper";
import laptopBG from "../public/laptopBG.webp";

export default function Home() {
  return (
    <Wrapper>
      <FirstSection laptopBG={laptopBG} />

      <div className="h-28"></div>

      <RolesFinalContainer />

      <div className="border-t-8 border-yellow-400"></div>

      <GuideLinesFinalContainer />
    </Wrapper>
  );
}

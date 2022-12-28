import Image from "next/image";
import { LeftSideCards } from "./DashBoard/LeftSideCards";
import { RightSideCards } from "./DashBoard/RightSideCards";

export function FirstSection({ laptopBG }) {
  return (
    <div className="flex flex-1 justify-evenly mt-20">
      <div className="flex h-auto bg-yellow-400 mr-4 ml-3 flex-1 rounded-lg break-words">
        <LeftSideCards />
        <RightSideCards />
      </div>
      <div>
        <Image src={laptopBG} className="rounded-lg w-auto h-auto" />
      </div>
    </div>
  );
}

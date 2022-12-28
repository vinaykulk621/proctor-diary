import { LeftSideCards } from "../../components/home/DashBoard/LeftSideCards";
import { RightSideCards } from "../../components/home/DashBoard/RightSideCards";
import Image from "next/image";
import profile from "../../public/profile_icon.png";
import Wrapper from "../../components/global/Wrapper";
export default function Home() {
  return (
    <Wrapper>
      {/* two main divs for left and right part of the page */}
      <div className="flex flex-row justify-around flex-1">
        <div className="flex h-auto w-1/3 bg-gray-100 ml-4 mr-3 justify-center items-center flex-col rounded-lg">
          <div className="flex">
            <Image
              src={profile}
              width={300}
              height={300}
              alt="Profile photo it seems"
            />
          </div>
          <div className="text-5xl p-3">
            <p className="p-2">Vinay Kulkarni</p>
            <p className="p-2">1BM20CS188</p>
          </div>
        </div>
        <div className="flex h-auto bg-yellow-400 mr-4 ml-3 flex-1 rounded-lg break-words">
          <LeftSideCards />
          <RightSideCards />
        </div>
      </div>
    </Wrapper>
  );
}

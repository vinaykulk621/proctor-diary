import { StudentParentDetails } from "../../components/profile/StudentParentDetails";
import { StudentDetails } from "../../components/profile/StudentDetails";
import { Profiles } from "../../components/profile/Profiles";
import Wrapper from "../../components/global/Wrapper";
export default function Home() {
  return (
    <Wrapper>
      <div className="bg-yellow-400 h-screen">
        {/* two main divs for left and right part of the page */}
        <div className="flex flex-row justify-evenly flex-1 space-y-8">
          <Profiles />
          <div className="flex flex-col">
            <StudentDetails />
            <div className="h-20"></div>
            <StudentParentDetails />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

import { PrevSemCourses } from "../../components/Regitration/PrevSemCourses";
import { CurrentSemCourses } from "../../components/Regitration/CurrentSemCourses";
import { StudentProctorDeatails } from "../../components/Regitration/StudentProctorDeatails";
import Wrapper from "../../components/global/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="bg-yellow-400">
        <StudentProctorDeatails />
        <div className="flex flex-col">
          <CurrentSemCourses />
          <PrevSemCourses />
        </div>
      </div>
    </Wrapper>
  );
}

import { PrevSemCourses } from "../../components/Regitration/PrevSemCourses";
import { CurrentSemCourses } from "../../components/Regitration/CurrentSemCourses";
import { StudentProcotorDeatails } from "../../components/Regitration/StudentProcotorDeatails";
import Wrapper from "../../components/global/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <div className="bg-yellow-400">
        <StudentProcotorDeatails />
        <div className="flex flex-col">
          <CurrentSemCourses />
          <div className="h-20" />
          <PrevSemCourses />
        </div>
      </div>
    </Wrapper>
  );
}

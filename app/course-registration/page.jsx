import { PrevSemCourses } from "../../components/Regitration/PrevSemCourses";
import { CurrentSemCourses } from "../../components/Regitration/CurrentSemCourses";
import { StudentProcotorDeatails } from "../../components/Regitration/StudentProcotorDeatails";
import Wrapper from "../../components/global/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <StudentProcotorDeatails />
      <div className="flex flex-col">
        <CurrentSemCourses />
        <div className="h-20"></div>
        <PrevSemCourses />
      </div>
    </Wrapper>
  );
}

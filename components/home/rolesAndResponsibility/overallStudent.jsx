import { StudentDetails2 } from "./studentDetails2";
import { StudentDetails } from "./studentDetails";
export function OverallStudent({}) {
  return (
    <div className="flex flex-row w-screen text-lg justify-evenly break-words">
      <StudentDetails />
      <StudentDetails2 />
    </div>
  );
}

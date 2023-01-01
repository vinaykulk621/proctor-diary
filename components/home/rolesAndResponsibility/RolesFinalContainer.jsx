import { Proctor } from "./proctor";
import { Student } from "./student";

export function RolesFinalContainer({}) {
  return (
    <div className="flex flex-col">
      <h1 className="uppercase text-3xl font-bold text-red-700 pl-8 ">
        Roles and Responsibilty
      </h1>
      <Proctor />
      <Student />
    </div>
  );
}

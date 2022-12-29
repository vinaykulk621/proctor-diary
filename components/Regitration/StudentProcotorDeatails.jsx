import React from "react";
import { Tablets } from "./tablets";
import { ProfilePallete } from "../global/profilePallete";
export function StudentProcotorDeatails({}) {
  return (
    <div className="flex flex-row space-x-16 text-center pb-10 justify-evenly">
      <div className="flex flex-col space-y-4">
        <Tablets content={"USN"} />
        <Tablets content={"Student Name"} />
        <Tablets content={"Studnet Email"} />
        <Tablets content={"Department"} />
        <Tablets content={"Mobile Number"} />
      </div>
      <div className="flex flex-col space-y-4">
        <Tablets content={"Semester"} />
        <Tablets content={"Section"} />
      </div>
      <ProfilePallete width={250} height={250} />
      <div className="flex flex-col space-y-4">
        <Tablets content={"Proctor Name"} />
        <Tablets content={"Proctor Email"} />
        <Tablets content={"Department"} />
        <Tablets content={"Mobile Number"} />
      </div>
    </div>
  );
}

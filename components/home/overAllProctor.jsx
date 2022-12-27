import React from "react";
import ProctorDetails from "./proctorDetails";
import ProctorDetails2 from "./proctorDetails-2";
export function OverAllProctor({}) {
  return (
    <div className="font-inter flex flex-row w-screen text-lg justify-evenly break-words">
      <ProctorDetails />
      <ProctorDetails2 />
    </div>
  );
}

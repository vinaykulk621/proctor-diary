/** @format */

import React from "react";
import ProctorDetails from "./proctorDetails";
import ProctorDetails2 from "./proctorDetails-2";
export function OverAllProctor({}) {
  return (
    <div className='flex flex-row text-lg justify-evenly'>
      <ProctorDetails />
      <ProctorDetails2 />
    </div>
  );
}

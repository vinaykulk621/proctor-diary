/** @format */

import React from "react";
import CustomInput from "../global/customInput";
export function FormInputs({ ...props }) {
  return (
    <div className='border-2 border-black bg-gray-700 flex flex-col rounded-md space-y-1'>
      <div className='flex flex-row'>
        <CustomInput
          name='StudentName'
          label='Student-Name'
        />
        <CustomInput
          name='USN'
          label='USN'
        />
        <CustomInput
          name='Activity-Name'
          label='Activity-Name'
        />
      </div>
      <div className='flex flex-row'>
        <CustomInput
          name='Location'
          label='Location'
        />
        <CustomInput
          type='date'
          name='Date'
          label='Date'
        />
        <CustomInput
          type='number'
          name='Number-of-Hours-Worked'
          label='Number of Hours Worked'
        />
      </div>
      <div className='flex justify-center'>
        <CustomInput
          type='file'
          name='Certificate'
          label='Attatch Certificate of Participation'
        />
      </div>
      <button className='bg-green-500 px-3 py-1 w-40 h-7 rounded-md m-auto'>
        Claim
      </button>
    </div>
  );
}

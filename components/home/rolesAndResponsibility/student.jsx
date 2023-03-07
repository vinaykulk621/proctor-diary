/** @format */

import { OverallStudent } from "./overallStudent";
export function Student({}) {
  return (
    <div className='flex flex-col'>
      <p className='text-2xl uppercase font-bold pl-8 pt-8 border-b-2 border-red-400  '>
        Students
      </p>
      <OverallStudent />
    </div>
  );
}

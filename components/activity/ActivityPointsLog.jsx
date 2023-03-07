/** @format */

"use client";
import { use } from "react";
async function handler() {
  try {
    const res = await fetch("http://localhost:3000/api/getAllActivity", {
      method: "POST",
      headers: {
        "Content-Type": "aplication/json",
      },
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

export function ActivityPointsLog() {
  const activity = use(handler());
  return (
    <table className='table-fixed w-auto ml-20 mr-20 mb-20'>
      <thead className='border-b border-slate-600'>
        <tr>
          <th className='border-r border-slate-600 p-2'>Student-Name</th>
          <th className='border-r border-slate-600 p-2'>Activity-Name</th>
          <th className='border-r border-slate-600 p-2'>Location</th>
          <th className='border-r border-slate-600 p-2'>Date</th>
          <th className='border-r border-slate-600 p-2'>Duration(Hrs)</th>
          <th className='border-r-0 border-slate-600 p-2'>Activity-Points</th>
        </tr>
      </thead>
      <tbody className='text-justify'>
        {activity.map((e, i) => {
          return (
            <tr key={i}>
              <td className='border-r border-slate-600 p-2'>{e.studentName}</td>
              <td className='border-r border-slate-600 p-2'>
                {e.activityName}
              </td>
              <td className='border-r border-slate-600 p-2'>{e.location}</td>
              <td className='border-r border-slate-600 p-2'>{e.date}</td>
              <td className='border-r border-slate-600 p-2'>{e.duration}</td>
              <td className='border-r-0 border-slate-600 p-2'>{e.points}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

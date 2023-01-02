import React from "react";
export function ActivityPointsLog({}) {
  return (
    <table className="table-fixed w-screen">
      <thead className="border-b border-slate-600">
        <tr>
          <th className="border-r border-slate-600 p-2">S.no</th>
          <th className="border-r border-slate-600 p-2">Activity-Name</th>
          <th className="border-r border-slate-600 p-2">Location</th>
          <th className="border-r border-slate-600 p-2">Date</th>
          <th className="border-r border-slate-600 p-2">Duration(Hrs)</th>
          <th className="border-r border-slate-600 p-2">Activity-Points</th>
          <th className="border-r border-slate-600 p-2">Status</th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td className="border-r border-slate-600 p-2">1.</td>
          <td className="border-r border-slate-600 p-2">Painting</td>
          <td className="border-r border-slate-600 p-2">BMS-Hostel Mess</td>
          <td className="border-r border-slate-600 p-2">10-07-2022</td>
          <td className="border-r border-slate-600 p-2">4</td>
          <td className="border-r border-slate-600 p-2">1</td>
          <td className="text-green-500 border-r border-slate-600 p-2">
            Aproved
          </td>
        </tr>
        <tr>
          <td className="border-r border-slate-600 p-2">2.</td>
          <td className="border-r border-slate-600 p-2">Plantation-Drive</td>
          <td className="border-r border-slate-600 p-2">
            Dayanand-Sagar College of Medical Science
          </td>
          <td className="border-r border-slate-600 p-2">11-07-2022</td>
          <td className="border-r border-slate-600 p-2">4</td>
          <td className="border-r border-slate-600 p-2">1</td>
          <td className="text-red-500 border-r border-slate-600 p-2">
            Pending
          </td>
        </tr>
      </tbody>
    </table>
  );
}

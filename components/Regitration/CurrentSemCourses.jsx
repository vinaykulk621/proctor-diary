import React from "react";
export function CurrentSemCourses({}) {
  return (
    <>
      <h1 className="text-3xl p-5">Curresnt Semester</h1>
      <table className="table-auto w-screen">
        <thead className="border-b border-slate-600">
          <tr>
            <th className="border-r border-slate-600 p-2">S no.</th>
            <th className="border-r border-slate-600 p-2">Course Code</th>
            <th className="border-r border-slate-600 p-2">Course Title</th>
            <th className="border-r border-slate-600 p-2">Type</th>
            <th className="border-r border-slate-600 p-2">Atempts</th>
            <th className="border-r border-slate-600 p-2">Credits</th>
          </tr>
        </thead>
        <tbody className="text-justify">
          <tr>
            <td className="border-r border-slate-600 p-2"> 1.</td>
            <td className="border-r border-slate-600 p-2">20CS5PCAIP</td>
            <td className="border-r border-slate-600 p-2">
              Artificial Intelligence
            </td>
            <td className="border-r border-slate-600 p-2">Core</td>
            <td className="border-r border-slate-600 p-2">1</td>
            <td className="border-r border-slate-600 p-2">04</td>
          </tr>
          <tr>
            <td className="border-r border-slate-600 p-2"> 2.</td>
            <td className="border-r border-slate-600 p-2">20CS5PCCON</td>
            <td className="border-r border-slate-600 p-2">Computer Networks</td>
            <td className="border-r border-slate-600 p-2">Core</td>
            <td className="border-r border-slate-600 p-2">1</td>
            <td className="border-r border-slate-600 p-2">04</td>
          </tr>
          <tr>
            <td className="border-r border-slate-600 p-2"> 3.</td>
            <td className="border-r border-slate-600 p-2">20CS5PCUSP</td>
            <td className="border-r border-slate-600 p-2">
              Unix Shell and System Programming
            </td>
            <td className="border-r border-slate-600 p-2">Core</td>
            <td className="border-r border-slate-600 p-2">1</td>
            <td className="border-r border-slate-600 p-2">04</td>
          </tr>
          <tr>
            <td className="border-r border-slate-600 p-2"> 4.</td>
            <td className="border-r border-slate-600 p-2">20CS5PCSEG</td>
            <td className="border-r border-slate-600 p-2">
              Software Engineering{" "}
            </td>
            <td className="border-r border-slate-600 p-2">Core</td>
            <td className="border-r border-slate-600 p-2">1</td>
            <td className="border-r border-slate-600 p-2">04</td>
          </tr>
          <tr>
            <td className="border-r border-slate-600 p-2"> 5.</td>
            <td className="border-r border-slate-600 p-2">22CS5HSSPM</td>
            <td className="border-r border-slate-600 p-2">
              Software Project Management and Finance
            </td>
            <td className="border-r border-slate-600 p-2">Core</td>
            <td className="border-r border-slate-600 p-2">1</td>
            <td className="border-r border-slate-600 p-2">04</td>
          </tr>
          <tr>
            <td className="border-r border-slate-600 p-2"> 6.</td>
            <td className="border-r border-slate-600 p-2">20CS5PEADS</td>
            <td className="border-r border-slate-600 p-2">
              Advanced Data Structures
            </td>
            <td className="border-r border-slate-600 p-2">Elective</td>
            <td className="border-r border-slate-600 p-2">1</td>
            <td className="border-r border-slate-600 p-2">04</td>
          </tr>
          <tr>
            <td className="border-r border-slate-600 p-2"> 7.</td>
            <td className="border-r border-slate-600 p-2">20CS5PEAAG</td>
            <td className="border-r border-slate-600 p-2">
              Advanced Algorithms
            </td>
            <td className="border-r border-slate-600 p-2">Elective</td>
            <td className="border-r border-slate-600 p-2">1</td>
            <td className="border-r border-slate-600 p-2">04</td>
          </tr>
          <tr>
            <td className="border-r border-slate-600 p-2"> 8.</td>
            <td className="border-r border-slate-600 p-2">20CS5PWPW3</td>
            <td className="border-r border-slate-600 p-2">Project Work-3</td>
            <td className="border-r border-slate-600 p-2">Core</td>
            <td className="border-r border-slate-600 p-2">1</td>
            <td className="border-r border-slate-600 p-2">04</td>
          </tr>
        </tbody>
      </table>
      <button
        type="submit"
        className="bg-green-500 px-2 py-1 rounded-lg w-40 relative right-1/2 left-1/2 -bottom-8"
      >
        Registered
      </button>
    </>
  );
}

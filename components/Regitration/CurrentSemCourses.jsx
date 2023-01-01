import React from "react";
export function CurrentSemCourses({}) {
  return (
    <>
      <h1 className="text-3xl p-5">Curresnt Semester</h1>
      <table className="table-auto text-justify ml-5 mr-5">
        <thead>
          <tr className="border-2 border-solid border-l-0 border-r-0 border-t-0 border-yellow-400">
            <th>S no.</th>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Type</th>
            <th>Atempts</th>
            <th>Credits</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            1.
            <td>20CS5PCAIP</td>
            <td>Artificial Intelligence</td>
            <td>Core</td>
            <td>1</td>
            <td>04</td>
          </tr>
          <tr>
            2.
            <td>20CS5PCCON</td>
            <td>Computer Networks</td>
            <td>Core</td>
            <td>1</td>
            <td>04</td>
          </tr>
          <tr>
            3.
            <td>20CS5PCUSP</td>
            <td>Unix Shell and System Programming</td>
            <td>Core</td>
            <td>1</td>
            <td>04</td>
          </tr>
          <tr>
            4.
            <td>20CS5PCSEG</td>
            <td>Software Engineering </td>
            <td>Core</td>
            <td>1</td>
            <td>04</td>
          </tr>
          <tr>
            5.
            <td>22CS5HSSPM</td>
            <td>Software Project Management and Finance</td>
            <td>Core</td>
            <td>1</td>
            <td>04</td>
          </tr>
          <tr>
            6.
            <td>20CS5PEADS</td>
            <td>Advanced Data Structures</td>
            <td>Elective</td>
            <td>1</td>
            <td>04</td>
          </tr>
          <tr>
            7.
            <td>20CS5PEAAG</td>
            <td>Advanced Algorithms</td>
            <td>Elective</td>
            <td>1</td>
            <td>04</td>
          </tr>
          <tr>
            8.
            <td>20CS5PWPW3</td>
            <td>Project Work-3</td>
            <td>Core</td>
            <td>1</td>
            <td>04</td>
          </tr>
        </tbody>
      </table>
      <button
        type="submit"
        className="bg-blue-500 px-2 py-1 rounded-lg w-40 relative right-1/2 left-1/2 -bottom-8"
      >
        Register
      </button>
    </>
  );
}

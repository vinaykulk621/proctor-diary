/** @format */

"use client";
import { useSession } from "next-auth/react";
import { use, useState } from "react";

async function handleStudent() {
  const { data: session } = useSession();
  try {
    const res = await fetch("http://localhost:3000/api/getProctor", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session?.user.email,
      }),
    });
    // const ans = await res.json();
    // console.log(ans);
    return await res.json();
  } catch (e) {
    console.log(e);
  }
}

export function ProctorStudents({}) {
  const students = use(handleStudent());
  console.log("this is students", students);

  return (
    <table className='table-fixed'>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>USN</th>
          <th>Email-id</th>
          <th>Contact Number</th>
          <th>Semester</th>
          <th>Section</th>
          <th>Admision Type</th>
          <th>Local Addres</th>
          <th>Permanent Addres</th>
          <th>Parent-1/gaurdian-1</th>
          <th>Parent-2/gaurdian-2</th>
        </tr>
      </thead>
      <tbody>
        {students.map((e, i) => {
          <tr key={i}>
            <td>{e.studentName}</td>
            <td>{e.usn}</td>
            <td>{e.email}</td>
            <td>{e.contact}</td>
            <td>{e.semester}</td>
            <td>{e.section}</td>
            <td>{e.addmission}</td>
            <td>{e.local}</td>
            <td>{e.permanent}</td>
          </tr>;
        })}
      </tbody>
    </table>
  );
}

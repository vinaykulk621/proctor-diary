"use client";
import { ProctorStudents } from "../../../components/profile/faculty/proctorStudents";
import { Profiles } from "../../../components/profile/faculty/Profile";
import Wrapper from "../../../components/global/Wrapper";
import { Tablets } from "../../../components/global/Tablet";
import { useSession } from "next-auth/react";
import { useState } from "react";
export default function Home() {
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const { data: session } = useSession();

  async function handleProctor() {
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
      const ans = await res.json();
      setNumber(ans.contact);
      setEmail(ans.email);
      setDepartment(ans.department);
    } catch (e) {
      console.log(e);
    }
  }
  handleProctor();

  return (
    <Wrapper>
      <div className="bg-yellow-400 h-screen">
        <div className="flex flex-col justify-evenly space-y-8">
          <div className="flex flex-col w-80">
            <Profiles />
            <Tablets content={number} label="Phone-Number" />
            <Tablets content={email} label="Email-Id" />
            <Tablets content={department} label="department" />
          </div>
          <table className="table-auto">
            <thead>
              <tr>
                <th>name</th>
                <th>usn</th>
                <th>email</th>
                <th>contact</th>
                <th>bloodGroup</th>
                <th>dob</th>
                <th>admissionType</th>
                <th>localAddress</th>
                <th>permanentAddress</th>
                <th>personalEmail</th>
                <th>section</th>
                <th>semester</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vinay Kulkarni</td>
                <td>1BM20CS188</td>
                <td>vinay.cs20@bmsce.ac.in</td>
                <td>+91-9035815332</td>
                <td>O+</td>
                <td>29-12-2002</td>
                <td>K-cet</td>
                <td>BMS-Hostel</td>
                <td>kalaburagi</td>
                <td>kulkarnivinay@gmail.com</td>
                <td>5D</td>
                <td>5</td>
              </tr>
              <tr>
                <td>Utsav Bose</td>
                <td>1BM20CS189</td>
                <td>utsav.cs20@bmsce.ac.in</td>
                <td>+91-9035815332</td>
                <td>O-</td>
                <td>02-11-2001</td>
                <td>Management</td>
                <td>BMS-Hostel</td>
                <td>West bengal</td>
                <td>utsavBose123@gmail.com</td>
                <td>5D</td>
                <td>5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
}

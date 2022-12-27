"use client";
import Wrapper from "../components/global/Wrapper";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <Wrapper>
      <div className="flex flex-col">
        <div className="flex items-center justify-start">
          <h1>Roles and Responsibilty</h1>
        </div>

        {/* Overall wrapping content */}
        {/* Bullet points inside */}
        <p>Procotors</p>
        <div className="flex flex-row w-screen justify-around items-center text-lg break-words">
          {/* flex row(Table) with 2-columns and 3-rows*/}
          <div>
            <ul className="list-disc font-serif ">
              <li className="p-3">To provide emotional support for student</li>
              <li className="p-3">
                To monitor student behaviour,attendance,and punctuality
              </li>
              <li className="p-3">
                To keep parents/gaurdians informed about the student's progress
              </li>
            </ul>
          </div>

          <div>
            <ol className="list-disc">
              <li className="p-3">To monitor their academic performance</li>
              <li className="p-3">
                To counsel students on topics like the credit system, electives,
                research opportunities,and exchange programs
              </li>
              <li className="p-3">To at as a local gaurdian for students</li>
            </ol>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

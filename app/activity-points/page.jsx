"use client";
import { useState } from "react";
import { ActivityPointsLog } from "../../components/activity/ActivityPointsLog";
import CustomInput from "../../components/global/customInput";
import Wrapper from "../../components/global/Wrapper";

export default function Home() {
  const [usn, setUsn] = useState("");
  const [name, setName] = useState("");
  const [activityName, setActivityName] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  async function handler() {
    try {
      const response = await fetch("/api/putActivity", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          usn: usn,
          name: name,
          activityName: activityName,
          location: location,
          date: date,
          duration: hours,
        }),
      });
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handler}>
        <div className="flex flex-1 p-5 flex-col items-center justify-center">
          <div className="border-2 border-black bg-gray-700 flex flex-col rounded-md space-y-1">
            <div className="flex flex-row">
              <CustomInput
                name="StudentName"
                label="Student-Name"
                val={name}
                change={setName}
              />
              <CustomInput name="USN" label="USN" val={usn} change={setUsn} />
              <CustomInput
                name="Activity-Name"
                label="Activity-Name"
                val={activityName}
                change={setActivityName}
              />
            </div>
            <div className="flex flex-row">
              <CustomInput
                name="Location"
                label="Location"
                val={location}
                change={setLocation}
              />
              <CustomInput
                type="date"
                name="Date"
                label="Date"
                val={date}
                change={setDate}
              />
              <CustomInput
                type="number"
                name="Number-of-Hours-Worked"
                label="Number of Hours Worked"
                val={hours}
                change={setHours}
              />
            </div>
            <div className="flex justify-center">
              <CustomInput
                type="file"
                name="Certificate"
                label="Attatch Certificate of Participation"
              />
            </div>
            <button className="bg-green-500 px-3 py-1 w-40 h-7 rounded-md m-auto">
              Claim
            </button>
          </div>
        </div>
      </form>
      <div className="border-b-8 border-b-yellow-400" />
      <h1 className="text-4xl px-5 py-10">Previous Activity Points Claims</h1>
      <ActivityPointsLog />
    </Wrapper>
  );
}

"use client";
import { useSession } from "next-auth/react";
import { ActivityPointsLog } from "../../components/activity/ActivityPointsLog";
import CustomInput from "../../components/global/CustomInput";
import Wrapper from "../../components/global/Wrapper";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  const handle = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/putActivity", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          usn: e.target.USN.value,
          studentName: e.target.StudentName.value,
          activityName: e.target.ActivityName.value,
          location: e.target.Location.value,
          date: e.target.Date.value,
          duration: e.target.numberOfHoursWorked.value,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  };

  return (
    <Wrapper>
      <div className="flex flex-col">
        <form onSubmit={handle}>
          <div className="flex flex-1 p-5 flex-col items-center justify-center">
            <div className="border-2 border-black bg-gray-700 flex flex-col rounded-md space-y-1">
              <div className="flex flex-row">
                <CustomInput name="StudentName" label="Student-Name" />
                <CustomInput name="USN" label="USN" />
                <CustomInput name="ActivityName" label="Activity-Name" />
              </div>
              <div className="flex flex-row">
                <CustomInput name="Location" label="Location" />
                <CustomInput type="date" name="Date" label="Date" />
                <CustomInput
                  type="number"
                  name="numberOfHoursWorked"
                  label="Number of Hours Worked"
                />
              </div>
              <div className="flex justify-center">
                <CustomInput
                  type="file"
                  name="Certificate"
                  label="Attatch Certificate of Participation"
                />
              </div>
              <button
                className="bg-green-500 px-3 py-1 w-40 h-7 rounded-md m-auto"
                type="submit"
              >
                Claim
              </button>
            </div>
          </div>
        </form>
        <div className="border-b-8 border-b-yellow-400" />
        <h1 className="text-4xl px-5 py-10">Previous Activity Points Claims</h1>
        {/* <ActivityPointsLog /> */}
      </div>
    </Wrapper>
  );
}

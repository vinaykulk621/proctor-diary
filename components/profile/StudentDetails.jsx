import { Tablets } from "../global/Tablet";
export function StudentDetails({}) {
  return (
    <div className="flex flex-col space-y-10">
      <div className="flex flex-row space-x-5">
        <Tablets content={"Contact-Number"} />
        <Tablets content={"College Email-Id"} />
        <Tablets content={"Personal Email-Id"} />
        <Tablets content={"DOB"} />
      </div>
      <div className="flex flex-row space-x-5">
        <Tablets content={"Blood Group"} />
        <Tablets content={"Admission-type"} />
        <Tablets content={"Local Address"} />
        <Tablets content={"Permanent Address"} />
      </div>
    </div>
  );
}

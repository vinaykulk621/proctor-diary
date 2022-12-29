import Wrapper from "../../components/global/Wrapper";
import Gap from "../../components/global/Gap";
import { ProfilePalleteWithNames } from "../../components/profile/ProfilePalleteWithNames";
import { Tablets } from "../../components/global/Tablet";
export default function Home() {
  return (
    <Wrapper>
      {/* two main divs for left and right part of the page */}
      <div className="flex flex-row justify-evenly flex-1 space-y-8">
        <div className="flex flex-col space-y-10 pt-10">
          <ProfilePalleteWithNames
            width={500}
            height={500}
            name={"student name"}
          />
          <ProfilePalleteWithNames
            width={500}
            height={500}
            name={"Proctor name"}
          />
        </div>
        <div className="flex flex-col">
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
          <div className="h-20"></div>
          <div className="flex flex-row justify-evenly">
            <div className="flex flex-col">
              <h1 className="pb-8 text-2xl">Details</h1>
              <p>Name</p>
              <p>Occupation</p>
              <p>Qualification</p>
              <p>Contact Number</p>
              <p>Email-id</p>
              <p>Alternate Email-id</p>
            </div>
            <div className="flex flex-col">
              <h1 className="pb-8 text-2xl">Father/Gaurdian-1</h1>
              <p>Name</p>
              <p>Occupation</p>
              <p>Qualification</p>
              <p>Contact Number</p>
              <p>Email-id</p>
              <p>Alternate Email-id</p>
            </div>
            <div className="flex flex-col">
              <h1 className="pb-8 text-2xl">Mother/Gaurdian-2</h1>
              <p>Name</p>
              <p>Occupation</p>
              <p>Qualification</p>
              <p>Contact Number</p>
              <p>Email-id</p>
              <p>Alternate Email-id</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

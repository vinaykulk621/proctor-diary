import { ProfilePalleteWithNames } from "./ProfilePalleteWithNames";
export function Profiles({}) {
  return (
    <div className="flex flex-col space-y-10 pt-10">
      <ProfilePalleteWithNames width={500} height={500} name={"student name"} />
      <ProfilePalleteWithNames width={500} height={500} name={"Proctor name"} />
    </div>
  );
}

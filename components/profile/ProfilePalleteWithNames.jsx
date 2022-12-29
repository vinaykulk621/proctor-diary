import Image from "next/image";
import profile from "../../public/profile_icon.png";
export function ProfilePalleteWithNames({ width=200, height=200, name="Name" }) {
  return (
    <div className="flex flex-col h-auto w-1/3 justify-center items-center text-center">
      <Image
        src={profile}
        width={width}
        height={height}
        alt="Profile photo it seems"
      />
      <h1 className="text-lg">{name}</h1>
    </div>
  );
}

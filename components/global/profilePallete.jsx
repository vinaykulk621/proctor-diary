/** @format */

import Image from "next/image";
import profile from "../../public/profile_icon.png";
export function ProfilePallete({ width, height }) {
  return (
    <div className='flex h-auto w-1/3 justify-center items-center flex-col rounded-lg'>
      <div className='flex'>
        <Image
          src={profile}
          width={width}
          height={height}
          alt='Profile photo it seems'
        />
      </div>
    </div>
  );
}

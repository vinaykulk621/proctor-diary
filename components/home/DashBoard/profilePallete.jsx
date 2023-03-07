/** @format */

import Image from "next/image";
export function ProfilePallete({ profile }) {
  return (
    <div className='flex h-auto w-1/3 bg-gray-100 ml-4 mr-3 justify-center items-center flex-col rounded-lg'>
      <div className='flex'>
        <Image
          src={profile}
          width={300}
          height={300}
          alt='Profile photo it seems'
        />
      </div>
      <div className='text-5xl p-3'>
        <p className='p-2'>Vinay Kulkarni</p>
        <p className='p-2'>1BM20CS188</p>
      </div>
    </div>
  );
}

/** @format */

import React from "react";
export function Tablets({ content, label }) {
  return (
    <div className='flex flex-col w-auto'>
      <h1 className='text-2xl text-start text-black'>{label}</h1>
      <p className='bg-black text-white text-2xl px-2 py-1 rounded-md'>
        {content}
      </p>
    </div>
  );
}

/** @format */

"use client";
import Image from "next/image";
import logoWhiteFont from "../../../public/logoWhiteFont.png";
import { signIn } from "next-auth/react";
import Link from "next/link";

export default function StudentLoginForm(e) {
  async function studentLoginHandler(e) {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: e.target.email.value,
      password: e.target.password.value,
      usn: e.target.USN.value.toUpperCase(),
      redirect: true,
      callbackUrl: "/profile",
    });
  }

  async function facultyLoginHandler(e) {
    e.preventDefault();
    const result = await signIn("credentials", {
      email: e.target.facultyEmail.value,
      password: e.target.facultyPassword.value,
      redirect: true,
      callbackUrl: "/profile/faculty",
    });
  }
  return (
    <div className='bg-yellow-400 w-screen h-screen flex flex-row items-center justify-evenly'>
      <div className='flex flex-col'>
        <h1 className='text-3xl text-center pb-2'>Student-Login</h1>
        <form onSubmit={studentLoginHandler}>
          <div className=' border-2 border-black bg-black justify-center items-center flex flex-col rounded-md space-y-2'>
            <Image
              src={logoWhiteFont}
              alt='logoWhiteFont'
              width={100}
              height={100}
            />
            <div className='m-4'>
              <label
                htmlFor='USN'
                className='text-white'>
                USN
              </label>
              <input
                type='text'
                name='USN'
                className='ml-10 rounded-sm uppercase'
                id='USN'
                required
              />
            </div>
            <div className='m-4'>
              <label
                htmlFor='email'
                className='text-white'>
                Email-Id
              </label>
              <input
                type='email'
                name='email'
                className='ml-4 rounded-sm'
                id='email'
              />
            </div>
            <div className='m-4'>
              <label
                htmlFor='password'
                className='text-white'>
                password
              </label>
              <input
                type='password'
                name='password'
                className='ml-2 rounded-sm'
                id='password'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-green-400 w-16 items-center text-center rounded-sm'>
              Login
            </button>
          </div>
        </form>
      </div>

      <div className='flex flex-col'>
        <h1 className='text-3xl text-center pb-2'>Faculty-Login</h1>
        <form onSubmit={facultyLoginHandler}>
          <div className=' border-2 border-black bg-black justify-center items-center flex flex-col rounded-md space-y-2'>
            <Image
              src={logoWhiteFont}
              alt='logoWhiteFont'
              width={100}
              height={100}
            />
            <div className='m-4'>
              <label
                htmlFor='facultyEmail'
                className='text-white'>
                Email-Id
              </label>
              <input
                type='facultyEmail'
                name='facultyEmail'
                className='ml-4 rounded-sm'
                id='facultyEmail'
              />
            </div>
            <div className='m-4'>
              <label
                htmlFor='facultyPassword'
                className='text-white'>
                password
              </label>
              <input
                type='Password'
                name='facultyPassword'
                className='ml-2 rounded-sm'
                id='facultyPassword'
                required
              />
            </div>
            <button
              type='submit'
              className='bg-green-400 w-16 items-center text-center rounded-sm'>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

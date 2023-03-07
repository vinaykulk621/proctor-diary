/** @format */

import Link from "next/link";
import { Card } from "./Card";

export function RightSideCards({}) {
  return (
    <div className='flex flex-1 flex-col p-4 space-y-10 justify-center'>
      <Link href={"/handling"}>
        <Card content='Courses Handling' />
      </Link>
      <Link href={"/internship"}>
        <Card content='Internship & Placements' />
      </Link>
      <Link href={"/proctor-meet"}>
        <Card content='Proctor Meet' />
      </Link>
    </div>
  );
}

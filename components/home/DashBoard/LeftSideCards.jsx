/** @format */

import Link from "next/link";
import { Card } from "./Card";

export function LeftSideCards({}) {
  return (
    <div className='flex flex-1 flex-col p-4 space-y-10 justify-center'>
      <Link href={"/exams"}>
        <Card content='Exams' />
      </Link>
      <Link href={"/scholarship"}>
        <Card content='Scholarship' />
      </Link>
      <Link href={"/extra-curricular"}>
        <Card content='Extra curricular' />
      </Link>
    </div>
  );
}

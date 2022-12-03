"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavBar({ href, children }) {
  let segment = useSelectedLayoutSegment();
  let active = href == `/${segment}`;
  return (
    <Link
      href={href}
      className={active ? "bg-stone-900 text-white px-5" : "px-5"}
    >
      {children}
    </Link>
  );
}

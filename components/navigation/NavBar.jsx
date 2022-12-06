"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavBar({ href, children }) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`;
  return (
    <Link href={href} className={active ? "text-yellow-300" : ""}>
      {children}
    </Link>
  );
}

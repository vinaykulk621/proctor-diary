"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavBar({ href, children }) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}`;
  return (
    <Link href={href} className={active ? "underline" : ""}>
      {children}
    </Link>
  );
}

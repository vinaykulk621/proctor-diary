"use client";
import Wrapper from "../components/global/Wrapper";
import cookie from "js-cookie";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  useEffect(() => {
    setName(cookie.get("usn"));
  }, [name]);
  return (
    <Wrapper>
      <button
        onClick={() => {
          setName(cookie.set("usn", "188"));
          router.refresh();
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          setName(cookie.remove("usn"));
          router.refresh();
        }}
      >
        logout
      </button>
      <p>name:{name}</p>
      <p>Home</p>
    </Wrapper>
  );
}

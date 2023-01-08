"use client";

import { useState } from "react";

export function StudentParentDetails({}) {
  const [parent_1, setparent_1] = useState("");
  const [parent_1_occupation, setparent_1_occupation] = useState("");
  const [parent_1_qualifiction, setparent_1_qualifiction] = useState("");
  const [parent_1_contact, setparent_1_contact] = useState("");
  const [parent_1_email, setparent_1_email] = useState("");
  const [parent_1_alternate_email, setparent_1_alternate_email] = useState("");
  const [parent_2, setparent_2] = useState("");
  const [parent_2_occupation, setparent_2_occupation] = useState("");
  const [parent_2_qualifiction, setparent_2_qualifiction] = useState("");
  const [parent_2_contact, setparent_2_contact] = useState("");
  const [parent_2_email, setparent_2_email] = useState("");
  const [parent_2_alternate_email, setparent_2_alternate_email] = useState("");

  async function handleDetails() {
    try {
      const res = await fetch("http://localhost:3000/api/getStudent");
      const ans = await res.json();
      // console.log(ans["details"]);
      // console.log(ans["details"][0]["name"]);
      setparent_1(ans["details"][0]["name"]);
      setparent_1_occupation(ans["details"][0]["occupation"]);
      setparent_1_qualifiction(ans["details"][0]["qualification"]);
      setparent_1_contact(ans["details"][0]["contact"]);
      setparent_1_email(ans["details"][0]["email"]);
      setparent_1_alternate_email(ans["details"][0]["alternateEmail"]);

      setparent_2(ans["details"][1]["name"]);
      setparent_2_occupation(ans["details"][1]["occupation"]);
      setparent_2_qualifiction(ans["details"][1]["qualification"]);
      setparent_2_contact(ans["details"][1]["contact"]);
      setparent_2_email(ans["details"][1]["email"]);
      setparent_2_alternate_email(ans["details"][1]["alternateEmail"]);
    } catch (e) {
      console.log(e);
    }
  }
  handleDetails();
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-col">
        <h1 className="pb-8 text-2xl font-bold">Details</h1>
        <p className="text-xl">Name</p>
        <p className="text-xl">Occupation</p>
        <p className="text-xl">Qualification</p>
        <p className="text-xl">Contact Number</p>
        <p className="text-xl">Email-id</p>
        <p className="text-xl">Alternate Email-id</p>
      </div>
      <div className="flex flex-col">
        <h1 className="pb-8 text-2xl font-bold">Father/Gaurdian-1</h1>
        <p className="text-xl">{parent_1}</p>
        <p className="text-xl">{parent_1_occupation}</p>
        <p className="text-xl">{parent_1_qualifiction}</p>
        <p className="text-xl">{parent_1_contact}</p>
        <p className="text-xl">{parent_1_email}</p>
        <p className="text-xl">{parent_1_alternate_email}</p>
      </div>
      <div className="flex flex-col">
        <h1 className="pb-8 text-2xl font-bold">Mother/Gaurdian-2</h1>
        <p className="text-xl">{parent_2}</p>
        <p className="text-xl">{parent_2_occupation}</p>
        <p className="text-xl">{parent_2_qualifiction}</p>
        <p className="text-xl">{parent_2_contact}</p>
        <p className="text-xl">{parent_2_email}</p>
        <p className="text-xl">{parent_2_alternate_email}</p>
      </div>
    </div>
  );
}

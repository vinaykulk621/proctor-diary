import { OverAllProctor } from "./OverAllProctor";
export function Proctor({}) {
  return (
    <div className="flex flex-col">
      <p className="text-2xl uppercase font-bold p-2 pl-8 pt-8 border-b-2 border-red-400 ml-5 mr-5">
        Procotors
      </p>
      <OverAllProctor />
    </div>
  );
}

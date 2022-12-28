import { ProctorGuideLines } from "./proctorGuideLines";
export function GuideLinesFinalContainer({}) {
  return (
    <div className="flex flex-col h-screen">
      <h1 className="uppercase text-3xl font-bold text-red-700 pl-8 border-b-2 border-red-400">
        guidelines for proctors
      </h1>
      <ProctorGuideLines />
    </div>
  );
}

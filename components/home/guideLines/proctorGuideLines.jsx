import { ProctorGuideLineDetails } from "./proctorGuideLineDetails";
import { ProctorGuideLineDetails2 } from "./proctorGuideLineDetails2";
export function ProctorGuideLines({}) {
  return (
    <div className="flex flex-row text-lg justify-evenly">
      <ProctorGuideLineDetails />
      <ProctorGuideLineDetails2 />
    </div>
  );
}

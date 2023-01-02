import { ActivityPointsLog } from "../../components/activity/ActivityPointsLog";
import { FormInputs } from "../../components/activity/FormInputs";
import Wrapper from "../../components/global/Wrapper";
export default function Home() {
  return (
    <Wrapper>
      <form>
        <div className="flex flex-1 p-5 flex-col items-center justify-center">
          <FormInputs />
        </div>
      </form>
      <div className="border-b-8 border-b-yellow-400" />
      <h1 className="text-4xl px-5 py-10">Previous Activity Points Claims</h1>
      <ActivityPointsLog />
    </Wrapper>
  );
}

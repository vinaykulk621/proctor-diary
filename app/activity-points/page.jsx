import CustomInput from "../../components/global/customInput";
import Wrapper from "../../components/global/Wrapper";
export default function Home() {
  return (
    <Wrapper>
      <form className="bg-slate-200 flex">
        <div className="flex flex-1 p-5 flex-col items-center justify-center">
          <div className="border-2 border-black bg-gray-700 flex flex-col rounded-md space-y-2">
            <CustomInput name="StudentName" label="Student-Name" />
            <CustomInput name="USN" label="USN" />
            <CustomInput name="USN" label="USN" />
            <CustomInput name="USN" label="USN" />
            <CustomInput name="USN" label="USN" />
            <CustomInput name="USN" label="USN" />
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

import CustomInput from "../../components/global/customInput";
import Wrapper from "../../components/global/Wrapper";
export default function Home() {
  return (
    <Wrapper>
      <form>
        <div className="flex flex-1 p-5 flex-col items-center justify-center">
          <div className="border-2 border-black bg-gray-700 flex flex-col rounded-md space-y-1">
            <div className="flex flex-row">
              <CustomInput name="StudentName" label="Student-Name" />
              <CustomInput name="USN" label="USN" />
              <CustomInput name="Activity-Name" label="Activity-Name" />
            </div>
            <div className="flex flex-row">
              <CustomInput name="Location" label="Location" />
              <CustomInput type="date" name="Date" label="Date" />
              <CustomInput
                type="number"
                name="Number-of-Hours-Worked"
                label="Number of Hours Worked"
              />
            </div>
            <CustomInput
              type="file"
              name="Certificate"
              label="Attatch Certificate of Participation"
            />
          </div>
        </div>
      </form>
    </Wrapper>
  );
}

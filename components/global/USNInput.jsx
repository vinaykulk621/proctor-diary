const USNInput = (props) => {
  return (
    <div className="m-4">
      <label htmlFor="USN" className="text-white">
        USN
      </label>
      <input
        type="text"
        name="USN"
        className="ml-10 rounded-sm"
        id="USN"
        ref={props.USNRef}
      />
    </div>
  );
};
export default USNInput;

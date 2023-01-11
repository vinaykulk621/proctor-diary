export default function UsnInput(props) {
  return (
    <div className="m-4">
      <label htmlFor="email" className="text-white">
        USN
      </label>
      <input
        type="text"
        name="USN"
        className="ml-10 rounded-sm uppercase"
        id="USN"
        // defaultValue={props.usn}
        // onChange={(e) => props.setUsn(e.target.value)}
        required
      />
    </div>
  );
}

/** @format */

const USNInput = (props) => {
  return (
    <div className='m-4'>
      <label
        htmlFor='USN'
        className='text-white'>
        USN
      </label>
      <input
        type='text'
        name='USN'
        className='ml-10 rounded-sm uppercase'
        id='USN'
        defaultValue={props.usn}
        onChange={(e) => props.setUsn(e.target.value)}
      />
    </div>
  );
};
export default USNInput;

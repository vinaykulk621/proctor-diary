/** @format */

const EmailIdInput = (props) => {
  return (
    <div className='m-4'>
      <label
        htmlFor='email'
        className='text-white'>
        Email-Id
      </label>
      <input
        type='email'
        name='email'
        className='ml-4 rounded-sm'
        id='email'
        // defaultValue={props.email}
        // onChange={(e) => props.setUsn(e.target.value)}
      />
    </div>
  );
};
export default EmailIdInput;

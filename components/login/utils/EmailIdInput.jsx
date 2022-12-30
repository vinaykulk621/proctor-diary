const EmailIdInput = (props) => {
  return (
    <div className="m-4">
      <label htmlFor="emailId" className="text-white">
        Email-Id
      </label>
      <input
        type="email"
        name="emailId"
        className="ml-4 rounded-sm"
        id="emailId"
        ref={props.emailRef}
      />
    </div>
  );
};
export default EmailIdInput;

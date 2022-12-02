const Form = () => {
  return (
    <form className="flex bg-blue-400 ">
      <div className="block bg-black">
        <label htmlFor="emailId" className="text-white">
          emailId
        </label>
        <input type="text" name="emailId" className="border" id="emailId"/>
      </div>
    </form>
  );
};

export default Form;

const CustomInput = ({ type = "text", name, label }) => {
  if (name == "Location") {
    return (
      <div className="flex justify-evenly items-center p-5 space-x-2">
        <label htmlFor={name} className="text-white">
          {label}
        </label>
        <textarea type={type} name={name} className="rounded-sm" id={name} />
      </div>
    );
  } else {
    return (
      <div className="flex justify-evenly items-center p-5 space-x-2">
        <label htmlFor={name} className="text-white">
          {label}
        </label>
        <input type={type} name={name} className="rounded-sm" id={name} />
      </div>
    );
  }
};
export default CustomInput;

const CustomInput = ({ type = "text", name, label }) => {
  return (
    <div className="flex justify-evenly p-5 space-x-2">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input type={type} name={name} className="rounded-sm" id={name} />
    </div>
  );
};
export default CustomInput;

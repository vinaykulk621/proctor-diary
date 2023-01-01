const CustomInput = ({ type = "text", name, label }) => {
  return (
    <div className="flex justify-evenly p-10">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      <input type={type} name={name} className="rounded-sm" />
    </div>
  );
};
export default CustomInput;

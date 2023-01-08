const CustomInput = ({ type = "text", name, label, val, change }) => {
  return (
    <div className="flex justify-evenly items-center p-5 space-x-2">
      <label htmlFor={name} className="text-white">
        {label}
      </label>
      {name == "Location" ? (
        <textarea
          type={type}
          name={name}
          className="rounded-sm"
          id={name}
          onChange={(e) => change(e.target.value)}
          required
        />
      ) : type == "file" ? (
        <input
          type={type}
          name={name}
          className="rounded-sm"
          id={name}
          // onChange={(e) => change(e.target.value)}
          required
        />
      ) : (
        <input
          type={type}
          name={name}
          className="rounded-sm"
          id={name}
          // onChange={(e) => change(e.target.value)}
          required
        />
      )}
    </div>
  );
};

export default CustomInput;

/** @format */

const CustomInput = ({ type = "text", name, label }) => {
  return (
    <div className='flex justify-evenly items-center p-5 space-x-2'>
      <label
        htmlFor={name}
        className='text-white'>
        {label}
      </label>
      {name == "Location" ? (
        <textarea
          type={type}
          name={name}
          className='rounded-sm'
          id={name}
          required
        />
      ) : type == "file" ? (
        <input
          type={type}
          name={name}
          className='rounded-sm'
          id={name}
        />
      ) : (
        <input
          type={type}
          name={name}
          className='rounded-sm'
          id={name}
          required
        />
      )}
    </div>
  );
};

export default CustomInput;

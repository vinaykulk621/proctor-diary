export function PasswordInput(props) {
  return (
    <div className="m-4">
      <label htmlFor="password" className="text-white">
        password
      </label>
      <input
        type="password"
        name="password"
        className="ml-2 rounded-sm"
        id="password"
        // defaultValue={props.Password}
        // onChange={(e) => props.setPassword(e.target.value)}
        required
      />
    </div>
  );
}

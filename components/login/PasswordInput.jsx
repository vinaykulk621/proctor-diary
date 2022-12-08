export function PasswordInput(props) {
  return (
    <div className="m-4">
      <label htmlFor="passwordId" className="text-white">
        password
      </label>
      <input
        type="password"
        name="passwordId"
        className="ml-2 rounded-sm"
        id="passwordId"
        ref={props.passwordRef}
        required
      />
    </div>
  );
}

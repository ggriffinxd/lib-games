export default function TextInput({ label, value, setValue }) {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={label}
        id={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

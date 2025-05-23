import s from "./Input.module.scss";

function Input({
  type = "text",
  placeholder,
  name,
  fullWidth = false,
  value,
  onChange,
}) {
  return (
    <div className={fullWidth ? s.bigSize : s.smallSize}>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;

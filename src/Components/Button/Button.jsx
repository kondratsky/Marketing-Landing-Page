import classNames from "classnames";

import s from "./Button.module.scss";

function Button({
  label,
  type = "primary",
  onClick,
  size = "small",
  isDisabled = false,
  className,
}) {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      className={classNames(s.btn, s[type], s[size], className)}
    >
      {label}
    </button>
  );
}
export default Button;

import classNames from "classnames";
import { useState } from "react";
import s from "./Button.module.scss";
function Button({ label, type = "primary", width, height }) {
  const [isDisabled, SetDisabled] = useState(false);
  const handleClick = () => {
    SetDisabled(true);
  };
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={classNames(s.btn, s[type])}
      style={{ width: width, height: height }}
    >
      {label}
    </button>
  );
}
export default Button;

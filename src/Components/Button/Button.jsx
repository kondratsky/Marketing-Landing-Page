import classNames from "classnames";
import s from "./Button.module.scss";
function Button({ label, type = "primary" }) {
  return <button className={classNames(s.btn, s[type])}>{label}</button>;
}
export default Button;

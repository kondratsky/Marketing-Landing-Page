import s from "./Input.module.scss";
import clsx from 'clsx';


function  Input ({value, onChange, placeholder, error, type="text"}) {
  return(
<div>
  <input 
  type={type}
  value={value}
  onChange={(e) => onChange(e.target.value)}
  placeholder={placeholder}
  className={clsx(s.input, error && s.inputError)}/>
  {error && <p className={s.errorText}>{error}</p>}
</div>

  );
}
export default Input;

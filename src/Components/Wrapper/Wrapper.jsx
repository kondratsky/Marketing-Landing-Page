import s from "./Wrapper.module.scss";

function Wrapper({ children }) {
  return <div className={s.wrapper}> {children}</div>;
}

export default Wrapper;

import Logo from "../../assets/Logomark.svg";
import Button from "../Button/Button";
import s from "./Header.module.scss";

function Header() {
  const h2 = "Abstractly";
  const arrNavigation = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <img src={Logo} alt="" />
        <h2>{h2}</h2>
      </div>
      <nav className={s.navigation}>
        {arrNavigation.map((el) => (
          <a href={el.href}>{el.label}</a>
        ))}
      </nav>
      <div className={s.buttons}>
        <Button label="Learn more" type="secondary" />
        <Button label="See pricing" />
      </div>
    </header>
  );
}

export default Header;

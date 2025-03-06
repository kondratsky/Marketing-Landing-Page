import Logo from "../../assets/Logomark.svg";
import s from "./Header.module.scss";

function Header() {
  const h2 = "Abstractly";
  const arrNavigation = [
    "Home",
    "Features",
    "Pricing",
    "About us",
    "Contact",
    "Learn more",
    "See pricing",
  ];
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <img src={Logo} alt="" />
        <h2 className="h2_text">{h2}</h2>
      </div>
      <nav className={s.navigation}>
        <a href="#home">{arrNavigation[0]}</a>
        <a href="#features">{arrNavigation[1]}</a>
        <a href="#pricing">{arrNavigation[2]}</a>
        <a href="#about">{arrNavigation[3]}</a>
        <a href="#contact">{arrNavigation[4]}</a>
      </nav>
      <div className={s.buttons}>
        <button className={s.learnMore}>{arrNavigation[5]}</button>
        <button className={s.seePricing}>{arrNavigation[6]}</button>
      </div>
    </header>
  );
}

export default Header;

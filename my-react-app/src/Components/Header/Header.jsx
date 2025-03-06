import Logo from "../../assets/Logomark.svg";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <img src={Logo} alt="" />
        <h2 className="h2_text">Abstractly</h2>
      </div>
      <nav className={s.navigation}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About us</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className={s.buttons}>
        <button className={s.learnMore}>Learn more</button>
        <button className={s.seePricing}>See pricing</button>
      </div>
    </header>
  );
}

export default Header;

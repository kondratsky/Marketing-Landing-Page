import Logo from "../../assets/Logomark.svg";
import Button from "../Button/Button";
import s from "./Header.module.scss";
import { useState } from "react";
import BurgerMenu from "../../assets/Icons/BurgerMenu.svg";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const arrNavigation = [
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className={s.header}>
      <div className={s.navWrapper}>
        <div className={s.logoWrapper}>
          <img src={Logo} alt="" />
          <h2>Abstractly</h2>
        </div>

        <nav className={`${s.navigation} ${menuOpen ? s.open : ""}`}>
          {arrNavigation.map((el) => (
            <a key={el.href} href={el.href} onClick={() => setMenuOpen(false)}>
              {el.label}
            </a>
          ))}
        </nav>
        <button
          className={s.burger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <img src={BurgerMenu} alt="Menu" />
        </button>
      </div>
      <div className={s.buttons}>
        <Button label="Learn more" type="secondary" />
        <Button label="See pricing" />
      </div>
    </header>
  );
}

export default Header;

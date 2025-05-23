import Logo from "../../assets/Logomark.svg";
import BurgerMenu from "../../assets/Icons/BurgerMenu.svg";
import Button from "../Button/Button";
import { useState } from "react";
import s from "./Header.module.scss";

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
          <img src={Logo} alt="Logo" />
          <h2>Abstractly</h2>
        </div>

        <nav className={`${s.navigation} ${menuOpen ? s.open : ""}`}>
          {arrNavigation.map((el) => (
            <a key={el.href} href={el.href} onClick={() => setMenuOpen(false)}>
              {el.label}
            </a>
          ))}
        </nav>

        <div className={s.buttons}>
          <Button label="Learn more" type="secondary" />
          <Button label="See pricing" />
        </div>
      </div>

      <button
        className={s.burger}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <img src={BurgerMenu} alt="Menu" />
      </button>
    </header>
  );
}

export default Header;

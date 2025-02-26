import Logo from "../../assets/Logomark.svg";
import s from "./Header.module.scss";

function Header() {
  return (
    <header className={s.header}>
      <div className={s.logoWrapper}>
        <img src={Logo} alt="" />
        <h2 className="h2_text">Abstractly</h2>
      </div>
      <nav>
        <ul>
          <li>Home</li>
          <li>Features</li>
          <li>Pricing</li>
          <li>About us</li>
          <li>Contact</li>
        </ul>
        <button>Learn more</button>
        <button>See pricing</button>
      </nav>
    </header>
  );
}

export default Header;

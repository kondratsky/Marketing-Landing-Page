import s from "./SectionSocialProof.module.scss";
import logoWanWain from "../../assets/logoWanWain.svg";
import logoRobinwood from "../../assets/logoRobinwood.svg";
import logoSwapdo from "../../assets/logoSwapdo.svg";
import logoDiamond from "../../assets/logoDiamond.svg";
import logoAirCar from "../../assets/logoAirCar.svg";
import logoMakroHard from "../../assets/logoMakroHard.svg";

function SectionSocialProof() {
  return (
    <div>
      <p className={s.headerText}>Used by teams that you love</p>

      <marquee>
        <div className={s.allLogo}>
          <img src={logoWanWain} alt="logoWanWain" />
          <img src={logoRobinwood} alt="logoRobinwood" />
          <img src={logoSwapdo} alt="logoSwapdo" />
          <img src={logoDiamond} alt="logoDiamond" />
          <img src={logoAirCar} alt="logoAirCar" />
          <img src={logoMakroHard} alt="logoMakroHard" />
        </div>
      </marquee>
    </div>
  );
}
export default SectionSocialProof;

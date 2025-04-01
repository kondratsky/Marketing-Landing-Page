import Header from "./Components/Header/Header";
import SectionHero from "./Components/SectionHero/SectionHero";
import s from "./App.module.scss";
import Marquee from "react-fast-marquee";
import SectionSocialProof from "./Components/SectionSocialProof/SectionSocialProof";
import SectionFeaturesFirst from "./Components/SectionFeaturesFirst/SectionFeaturesFirst";

function App() {
  return (
    <div className={s.body}>
      <Header />
      <div className={s.wrapper}>
        <SectionHero />
        <SectionSocialProof />
        <SectionFeaturesFirst />
      </div>
    </div>
  );
}

export default App;

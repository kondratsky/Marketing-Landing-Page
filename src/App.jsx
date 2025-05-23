import Header from "./Components/Header/Header";
import SectionHero from "./Components/SectionHero/SectionHero";
import s from "./App.module.scss";
import Marquee from "react-fast-marquee";
import SectionSocialProof from "./Components/SectionSocialProof/SectionSocialProof";
import FeatureHighlights from "./Components/FeatureHighlights/FeatureHighlights";
import Container from "./Components/Container/Container";
import DesignShowcase from "./Components/DesignShowcase/DesignShowcase";
import Convenience from "./Components/Convenience/Convenience";
import Price from "./Components/Price/Price";
import Question from "./Components/Question/Question";
import Subscribe from "./Components/Subscribe/Subscribe";

function App() {
  return (
    <div className={s.body}>
      <Header />

      <div className={s.wrapper}>
        <Container>
          <SectionHero />
        </Container>
        <SectionSocialProof />
        <Container>
          <FeatureHighlights />
          <DesignShowcase />
          <Convenience />
          <Price />
          <Question />
          <Subscribe />
        </Container>
      </div>
    </div>
  );
}

export default App;

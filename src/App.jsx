import Header from "./Components/Header/Header";
import Wrapper from "./Components/Wrapper/Wrapper";
import SectionHero from "./Components/SectionHero/SectionHero";
import Container from "./Components/Container/Container";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.body}>
      <Header />
      <Wrapper>
        <Container>
          <SectionHero />
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;

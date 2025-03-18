import Header from "./Components/Header/Header";
import SectionHero from "./Components/SectionHero/SectionHero";
import Container from "./Components/Container/Container";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.body}>
      <Header />
      <div className={s.wrapper}>
        <Container>
          <SectionHero />
        </Container>
      </div>
    </div>
  );
}

export default App;

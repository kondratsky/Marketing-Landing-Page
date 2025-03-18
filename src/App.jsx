import Header from "./Components/Header/Header";
import SectionHero from "./Components/SectionHero/SectionHero";
import s from "./App.module.scss";

function App() {
  return (
    <div className={s.body}>
      <Header />
      <div className={s.wrapper}>
        <SectionHero />
      </div>
    </div>
  );
}

export default App;

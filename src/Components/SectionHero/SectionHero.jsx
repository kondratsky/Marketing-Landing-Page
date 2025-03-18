import Button from "../Button/Button";
import { withContainer } from "../Container/Container";

import s from "./SectionHero.module.scss";

function SectionHero({ className }) {
  return (
    <div className={`${s.sectionHero} ${className || ""}`}>
      <div className={s.heroMessage}>
        <div className={s.wrapperBlock}>
          <p>Well crafted abstract images</p>
          <p>
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>
        </div>
        <div className={s.ctaButtons}>
          <Button label="Learn more" type="secondary" size="big" />
          <Button label="See pricing" type="primary" size="big" />
        </div>
      </div>
      <div>
        <img src="/HeroImage.svg" alt="Logotype" className="heroImage" />
      </div>
    </div>
  );
}

export default withContainer(SectionHero);

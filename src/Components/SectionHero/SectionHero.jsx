import Button from "../Button/Button";
import { withContainer } from "../Container/Container";
import { useState, useEffect } from "react";

import s from "./SectionHero.module.scss";

function SectionHero({ className }) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 375);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`${s.sectionHero} ${className || ""}`}>
      <div className={s.heroMessage}>
        <div className={s.wrapperBlock}>
          <p className={s.title}>Well crafted abstract images</p>
          <p className={s.description}>
            High quality abstract images for your projects, wallpaper and
            presentations.
          </p>
        </div>
        <div className={s.ctaButtons}>
          <Button
            label="Learn more"
            type="secondary"
            size={isSmallScreen ? "small" : "big"}
          />
          <Button
            label="Learn more"
            type="primary"
            size={isSmallScreen ? "small" : "big"}
          />
        </div>
      </div>
      <div className={s.heroImageWrapper}>
        <img src="/HeroImage.svg" alt="Logotype" className={s.heroImage} />
      </div>
    </div>
  );
}
export default withContainer(SectionHero);

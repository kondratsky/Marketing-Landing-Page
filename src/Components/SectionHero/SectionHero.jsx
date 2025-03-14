import Button from "../Button/Button";
import s from "./SectionHero.module.scss";

function SectionHero() {
  return (
    <div className={s.SectionHero}>
      <div className={s.HeroMessage}>
        <p>
          Well crafted
          <br /> abstract images
        </p>
        <p>
          High quality abstract images for your projects,
          <br /> wallpaper and presentations.
        </p>
        <div>
          <Button
            label={"Learn more"}
            type="secondary"
            width={"175,5px"}
            height={"60px"}
          />
          <Button
            label={"See pricing"}
            type="primary"
            width={"175,5px"}
            height={"60px"}
          />
        </div>
      </div>
    </div>
  );
}
export default SectionHero;

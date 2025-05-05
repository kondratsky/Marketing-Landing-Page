import s from "../../Components/Card/Card.module.scss";

function Card({ popular, description, highlight, smallText }) {
  return (
    <div className={s.card}>
      <div className={popular ? s.MostPopular : undefined}>
        <span>{popular}</span>
      </div>
      <span
        className={smallText ? s.smallDescriptionStyle : s.descriptionStyle}
      >
        {description}
      </span>
      <span className={s.highlight}>{highlight}</span>
    </div>
  );
}

export default Card;

import s from "../../Components/Card/Card.module.scss";

function Card({ popular, description, highlight, smallText, direction ="column" }) {
  return (
    <div className={`${s.card} ${direction === "row" ? s.row : s.column}`}>
      <div className={popular ? s.MostPopular : undefined}>
        <p>{popular}</p>
      </div>
      <p
        className={smallText ? s.smallDescriptionStyle : s.descriptionStyle}
      >
        {description}
      </p>
      <p className={s.highlightStyle}>{highlight}</p>
    </div>
  );
}

export default Card;

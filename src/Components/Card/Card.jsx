import s from "../../Components/Card/Card.module.scss";
import Check from "../../assets/Icons/check-fill.svg";
import Button from "../Button/Button";

function Card({
  popular,
  title,
  highlight,
  direction = "column",
  price,
  per,
  billing,
  include,
  purple,
}) {
  return (
    <div className={`${s.card} ${direction === "row" ? s.row : s.column}`}>
      {popular && (
        <div className={s.mostPopular}>
          <p>{popular}</p>
        </div>
      )}
      <div className={s.header}>
        <p className={s.titleStyle}>{title}</p>
        <p className={s.highlightStyle}>{highlight}</p>
      </div>

      <div className={s.priceGroup}>
        <div className={purple ? s.purpleRow : s.blackRow}>
          <span className={s.price}>{price}</span>
          <span className={s.per}>{per}</span>
        </div>
        {billing && <p className={s.billing}>{billing}</p>}
      </div>
      <div className={s.include}>
        {include.map((include, index) => (
          <div key={index} className={s.includeItem}>
            <img src={Check} alt="check icon" className={s.icon} />
            <span>{include}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;

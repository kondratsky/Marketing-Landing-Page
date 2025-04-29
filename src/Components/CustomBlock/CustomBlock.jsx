import s from "./CustomBlock.module.scss";

function CustomBlock({
  title,
  description,
  highlight,
  smallText,
  imgSrc,
  direction = "column",
}) {
  return (
    <div className={`${s.headerContainer} ${s[direction]}`}>
      {imgSrc && <img src={imgSrc} alt={title} className={s.imageStyle} />}

      <div className={s.textWrapper}>
        <h2 className={s.titleStyle}>{title}</h2>
        <p className={smallText ? s.smallDescriptionStyle : s.descriptionStyle}>
          {description}
        </p>
        <p className={s.highlightStyle}>{highlight}</p>
      </div>
    </div>
  );
}
export default CustomBlock;

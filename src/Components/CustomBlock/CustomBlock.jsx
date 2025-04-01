import s from "./CustomBlock.module.scss";

function CustomBlock({ title, description, highlight, smallText, imgSrc }) {
  return (
    <div className={s.headerContainer}>
      {imgSrc && <img src={imgSrc} alt={title} className={s.imageStyle} />}
      <h2 className={s.titleStyle}>{title}</h2>
      <p className={smallText ? s.smallDescriptionStyle : s.descriptionStyle}>
        {description}
      </p>
      <span className={s.highlightStyle}>{highlight}</span>
    </div>
  );
}
export default CustomBlock;

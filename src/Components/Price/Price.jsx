import s from "../../Components/Price/Price.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import Check from "../../assets/Icons/check-fill.svg";
import Button from "../Button/Button";
import Card from "../Card/Card";

function Price() {
  return (
    <div className={s.price}>
      <div className={s.header}>
        <CustomBlock
          title="Pricing Tiers"
          description="Fit for all your needs"
          highlight="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        />
      </div>
      <div className={s.container}>
        <div className={s.card}>
          <div className={s.headerCard}>
        <Card
          description="Basic Plan"
          highlight="Access to a curated selection of abstract images"
          smallText={true}
        />
        </div>
        </div>
      </div>
    </div>
  );
}
export default Price;

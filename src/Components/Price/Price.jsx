import s from "../../Components/Price/Price.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import Check from "../../assets/Icons/check-fill.svg";
import Button from "../Button/Button";
function Price() {
  return (
    <div className={s.Price}>
      <div className={s.Header}>
        <CustomBlock
          title="Pricing Tiers"
          description="Fit for all your needs"
          highlight="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        />
      </div>
      <div className={s.Container}>
        <div className={s.Card}>
          <CustomBlock
            description="Basic Plan"
            highlight="Access to a curated selection of abstract images"
            smallText={true}
          />
          <div className={s.CardPrice}>
            <span className={s.PriceValue}>$9.99</span>
            <span className={s.PricePeriod}>/month</span>
            <p className={s.silverText}>Billed monthly</p>
          </div>
          <div className={s.Include}>
            <div className={s.row}>
              <img src={Check} alt="Check" />
              <p className={s.silverText}>Standard quality images</p>
            </div>

            <div className={s.row}>
              <img src={Check} alt="Check" />
              <p className={s.silverText}>Limited to personal use</p>
            </div>

            <div className={s.row}>
              <img src={Check} alt="Check" />
              <p className={s.silverText}>Email support</p>
            </div>
          </div>
          <Button type="secondary" label="Buy now"></Button>
        </div>

        <div className={s.Card}>
          <div className={s.HeaderCard}>
            <p>Most Popular</p>
          </div>

          <CustomBlock
            description="Basic Plan"
            highlight="Access to a curated selection of abstract images"
            smallText={true}
          />
          <div className={s.CardPrice}>
            <span className={s.PriceValue}>$9.99</span>
            <span className={s.PricePeriod}>/month</span>
            <p className={s.silverText}>Billed monthly</p>
          </div>
          <div className={s.Include}>
            <div className={s.row}>
              <img src={Check} alt="Check" />
              <p className={s.silverText}>Standard quality images</p>
            </div>

            <div className={s.row}>
              <img src={Check} alt="Check" />
              <p className={s.silverText}>Limited to personal use</p>
            </div>

            <div className={s.row}>
              <img src={Check} alt="Check" />
              <p className={s.silverText}>Email support</p>
            </div>
          </div>
          <Button type="secondary" label="Buy now"></Button>
        </div>
      </div>
    </div>
  );
}
export default Price;

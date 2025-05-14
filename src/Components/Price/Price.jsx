import { useState } from "react";
import s from "../../Components/Price/Price.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import Check from "../../assets/Icons/check-fill.svg";
import Button from "../Button/Button";
import Card from "../Card/Card";

function Price() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className={s.price}>
      <div className={s.header}>
        <CustomBlock
          title="Pricing Tiers"
          description="Fit for all your needs"
          highlight="Pick the plan that suits you today and step up as your demands grow - our flexible options have your journey mapped out."
        />
        <div className={s.toggleTabs}>
          <div>
            <button
              className={`${s.tab} ${!isYearly ? s.active : ""}`}
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </button>
            <button
              className={`${s.tab} ${isYearly ? s.active : ""}`}
              onClick={() => setIsYearly(true)}
            >
              Annually
            </button>
          </div>
        </div>
      </div>

      <div className={s.container}>
        <div className={s.card}>
          <Card
            popular={false}
            title="Basic Plan"
            highlight="Access to a curated selection of abstract images"
            price={isYearly ? "$99.99" : "$9.99"}
            per={isYearly ? "/year" : "/month"}
            billing={isYearly ? "Billed yearly" : "Billed monthly"}
            include={[
              "Standard quality images",
              "Limited to personal use",
              "Email support",
            ]}
          />
          <Button type="secondary" label="Buy now" />
        </div>

        <div className={s.card}>
          <Card
            purple={true}
            popular={true}
            title="Standard Plan"
            highlight="Next-level Integrations, priced economically"
            price={isYearly ? "$199.99" : "$19.99"}
            per={isYearly ? "/year" : "/month"}
            billing={isYearly ? "Billed yearly" : "Billed monthly"}
            include={[
              "Expanded library with more diverse abstract images",
              "High-resolution images available",
              "Suitable for commercial use",
              "Priority email support",
              "Advanced analytics",
            ]}
          />
          <Button type="primary" label="Buy now" />
        </div>

        <div className={s.card}>
          <Card
            popular={false}
            title="Premium Plan"
            highlight="Experience limitless living for power users"
            price={isYearly ? "$299.99" : "$29.99"}
            per={isYearly ? "/year" : "/month"}
            billing={isYearly ? "Billed yearly" : "Billed monthly"}
            include={[
              "Full access to the entire image library, including exclusive content",
              "Highest quality images, including premium collections",
              "Commercial and resale rights",
              "Dedicated customer support line",
              "24/7 support response time",
              "Advanced analytics and insights",
            ]}
          />
          <Button type="secondary" label="Buy now" />
        </div>
      </div>
    </div>
  );
}

export default Price;

import s from "./Subscribe.module.scss";
import Button from "../Button/Button";
import CustomBlock from "../../Components/CustomBlock/CustomBlock";
import Check from "../../assets/Icons/check-fill.svg";
import Input from "../Input/Input";
import { useState } from "react";

function Subscribe() {
  const [state, setState] = useState("");

  const arr = [
    "Exclusive access to new abstract images and collections",
    "Unlock special promotions only for subscribers",
    "Regular doses of artistic inspiration",
  ];
  return (
    <div className={s.subscribe}>
      <div className={s.container}>
        <div className={s.leftPanel}>
          <div className={s.descriptionAndInclude}>
            <CustomBlock description="Get the finest curated abstracts delivered weekly to your inbox" />
            <div className={s.include}>
              {arr.map((include, index) => (
                <div key={index} className={s.includeItem}>
                  <img src={Check} alt="check icon" className={s.icon} />
                  <span>{include}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={s.footer}>
            <div className={s.register}>
              <Input
                label="Ім'я користувача"
                name="username"
                placeholder="Введи ім'я"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                fullWidth={true}
              />

              <Button size="small" label="Subscribe" />
            </div>
            <p>We only send you the best! No spam. </p>
          </div>
        </div>
        <div className={s.rightPanel}>
          <img src="public/Subscribe.svg" alt="Subscribe" />
        </div>
      </div>
    </div>
  );
}
export default Subscribe;

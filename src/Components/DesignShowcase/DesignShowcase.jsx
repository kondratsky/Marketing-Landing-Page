import s from "./DesignShowcase.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import HD from "../../assets/Icons/hd-line.svg";
import classNames from "classnames";

function DesignShowcase() {
  return (
    <div className={s.DesignShowcase}>
      <div className={s.Header}>
        <CustomBlock
          title="High quality images"
          description="For designers, by designers"
          highlight="Unleash boundless creativity with a large repository of images optimized for designers"
        />
      </div>
      <div className={s.Container}>
        <div className={s.LeftPanel}>
          <div>
            <CustomBlock
              imgSrc={HD}
              title="5K resolution support"
              highlight="All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
              smallText={true}
            />
          </div>
        </div>
        <div>
          <img src="/DesingShowCaseImg.svg" alt="Logotype" />
        </div>
      </div>
    </div>
  );
}
export default DesignShowcase;

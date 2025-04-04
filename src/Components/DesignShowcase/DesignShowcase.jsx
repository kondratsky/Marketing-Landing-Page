import s from "./DesignShowcase.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import HD from "../../assets/Icons/hd-line.svg";

function DesignShowcase() {
  return (
    <div className={s.DesignShowcase}>
      <div className={s.DesignShowcaseHeader}>
        <CustomBlock
          title="High quality images"
          description="For designers, by designers"
          highlight="Unleash boundless creativity with a large repository of images optimized for designers"
        />
      </div>
      <div className={s.DesignShowcaseFlex}>
        {/* контейнер для розміщення по флексу */}

        <div className={s.DesignShowcaseBlock}>
          {/* створив блок для розміщення картинки збоку */}
          <CustomBlock
            imgSrc={HD}
            title="5K resolution support"
            description="All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
            smallText={true}
          />
        </div>
        <div>
          <img src="/DesingShowCaseImg.svg" alt="Logotype" />
        </div>
      </div>
    </div>
  );
}
export default DesignShowcase;

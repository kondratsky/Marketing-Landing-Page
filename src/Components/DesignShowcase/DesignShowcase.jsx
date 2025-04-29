import s from "./DesignShowcase.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import HD from "../../assets/Icons/hd-line.svg";
import Drop from "../../assets/Icons/water-percent-line.svg";
import Rainbow from "../../assets/Icons/rainbow-line.svg";

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
          <div className={s.flex}>
            <div className={s.Hd}>
              <div>
                <CustomBlock imgSrc={HD} direction="row" />
              </div>
              <div className={s.block}>
                <CustomBlock
                  description={"5K resolution support"}
                  highlight="All images boast a minimum resolution of 5K, ensuring crisp, crystal-clear quality."
                  smallText={true}
                />
              </div>
            </div>
            <div className={s.Drop}>
              <div>
                <CustomBlock imgSrc={Drop} direction="row" />
              </div>
              <div className={s.block}>
                <CustomBlock
                  description={"From water to glass"}
                  highlight="We offer a wide array of abstractions, ranging from water to glass, and encompassing various styles including 3D and vector."
                  smallText={true}
                />
              </div>
            </div>

            <div className={s.Rainbow}>
              <div>
                <CustomBlock imgSrc={Rainbow} direction="row" />
              </div>
              <div className={s.block}>
                <CustomBlock
                  description={"Portrait or landscape"}
                  highlight="Effortlessly adapt your images for any platform - whether it's a stunning wallpaper or captivating Instagram reels and stories."
                  smallText={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={s.RightPanel}>
          <img
            src="/DesingShowCaseImg.svg"
            alt="Logotype"
            className={s.DesingImg}
          />
        </div>
      </div>
    </div>
  );
}
export default DesignShowcase;

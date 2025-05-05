import s from "./Convenience.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import Rocket from "../../assets/Icons/rocket-2-line.svg";
import p2p from "../../assets/Icons/p2p-line.svg";
import Refund from "../../assets/Icons/refund-2-fill.svg";

function Convenience() {
  return (
    <div className={s.convenience}>
      <div className={s.header}>
        <CustomBlock
          title="Best-in-class support"
          description="Convenience and licensing that empowers"
          highlight="In a world where storytelling constantly evolves,don't let licensing and poor support hold you down."
        />
      </div>
      <div className={s.container}>
        <div className={s.leftPanel}>
          <div className={s.flex}>
            <div className={s.rocket}>
              <div>
                <CustomBlock imgSrc={Rocket} direction="row" />
              </div>
              <div className={s.block}>
                <CustomBlock
                  description={"Faster downloads"}
                  highlight="Our robust servers are primed to deliver the highest resolution images swiftly, ensuring a smooth download experience."
                  smallText={true}
                />
              </div>
            </div>
            <div className={s.p2p}>
              <div>
                <CustomBlock imgSrc={p2p} direction="row" />
              </div>
              <div className={s.block}>
                <CustomBlock
                  description={"Convenience for teams"}
                  highlight="Your single account can accommodate multiple users simultaneously downloading without any disruptions, streamlining teamwork and productivity."
                  smallText={true}
                />
              </div>
            </div>

            <div className={s.refund}>
              <div>
                <CustomBlock imgSrc={Refund} direction="row" />
              </div>
              <div className={s.block}>
                <CustomBlock
                  description={"Royalty-free licensing"}
                  highlight="Our straightforward, royalty-free licensing means your chosen images are yours to innovate with, without the hassle of negotiating usage rights for every new project."
                  smallText={true}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={s.rightPanel}>
          <img
            src="public/ConvienceImg.svg"
            alt="Logotype"
            className={s.convienceImg}
          />
        </div>
      </div>
    </div>
  );
}
export default Convenience;

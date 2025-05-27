import s from "./FeatureHighlights.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import download from "../../assets/Icons/download-2-line.svg";
import brush from "../../assets/Icons/brush-line.svg";
import copyright from "../../assets/Icons/copyright-line.svg";
import refund from "../../assets/Icons/refund-2-fill.svg";
import teamLine from "../../assets/Icons/team-line.svg";
import refresh from "../../assets/Icons/refresh-line.svg";

function FeatureHighlights() {
  return (
    <div className={s.sectionHighlights}>
      <div className={s.headerHighlights}>
        <CustomBlock
          title="Premium abstract images"
          description="Easy access to top quality images"
          highlight="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
        />
      </div>
      <div className={s.flexHighlightsContainer}>
        <CustomBlock
          imgSrc={download}
          description="Infinite Download"
          highlight="Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
          smallText={true}
        />
        <CustomBlock
          imgSrc={brush}
          description="Purely Handcrafted"
          highlight="No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust."
          smallText={true}
        />
        <CustomBlock
          imgSrc={copyright}
          description="All Are Under licensed"
          highlight="The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper)."
          smallText={true}
        />
        <CustomBlock
          imgSrc={refund}
          description="Cancel Anytime"
          highlight="Subscribe at your own pace, and cancel when you feel it's enough."
          smallText={true}
        />
        <CustomBlock
          imgSrc={teamLine}
          description="Empowering For Team"
          highlight="We support multiple seats at once, requiring only a single payment."
          smallText={true}
        />
        <CustomBlock
          imgSrc={refresh}
          description="No Limitations"
          highlight="Use as many as you want, from Dribbble presentations to PowerPoint presentations."
          smallText={true}
        />
      </div>
    </div>
  );
}
export default FeatureHighlights;

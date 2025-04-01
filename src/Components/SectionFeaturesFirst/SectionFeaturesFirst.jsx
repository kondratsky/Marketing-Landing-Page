import s from "./SectionFeaturesFirst.module.scss";
import CustomBlock from "../CustomBlock/CustomBlock";
import download from "../../assets/Icons/download-2-line.svg";

function SectionFeaturesFirst() {
  return (
    <div>
      <CustomBlock
        title="Premium abstract images"
        description="Easy access to top quality images"
        highlight="In a world where storytelling constantly evolves, we lead with groundbreaking images designed for your presentation excellence."
      />
      <div className="flexContainer">
        <CustomBlock
          imgSrc={download}
          description="Infinite Download"
          highlight="Once you subscribe to our plans, they're all yours. Download as many as you want and use them for work presentations, wallpapers, and much more."
          smallText={true}
        />
      </div>
    </div>
  );
}
export default SectionFeaturesFirst;

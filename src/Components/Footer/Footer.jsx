import s from "./Footer.module.scss"
import Youtube from "../../assets/Icons/Youtube.svg";
import Instagram from "../../assets/Icons/Instagram.svg";
import Facebook from "../../assets/Icons/Facebook.svg";
import GitHub from "../../assets/Icons/GitHub.svg";
import X from "../../assets/Icons/X.svg";

function Footer () {

    const arr = [ 
    { label: "Home", href: "#home" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "About us", href: "#about" },
    { label: "Contact", href: "#contact" }
];

  const socialLinks = [
    { icon: Youtube, href: "https://youtube.com" },
    { icon: Instagram, href: "https://instagram.com" },
    { icon: Facebook, href: "https://facebook.com" },
    { icon: GitHub, href: "https://github.com" },
    { icon: X, href: "https://x.com" } 
  ];
    return( 
        <div className={s.footer}>
            <div className={s.container}>   
                <div className={s.header}>
              {arr.map((el) =>(
                 <a key={el.href}  href={el.href}>{el.label}</a> ))}
            </div>
            <div className={s.flex}>
            <div className={s.icons}>
                {socialLinks.map (({icon, href}, index) => (
<a key={index} href={href} target="_blank" rel="noopener noreferrer"> <img  src={icon} alt={`social-icon-${index}`} /></a>
                ))}
            </div>
            <div className={s.copyRight}> 
                <span>© 2024 Abstractly, Inc. All rights reserved.</span>
            </div>
            </div>
            </div>
         
        </div>
    );
}
export default Footer;
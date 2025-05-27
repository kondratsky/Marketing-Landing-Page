import s from "./Feedback.module.scss"
import location from "../../assets/Icons/location.svg";
import phone from "../../assets/Icons/phone.svg";
import mail from "../../assets/Icons/mail.svg";
import Input from "../Input/Input";
import Button from "../Button/Button"


 function Feedback() {
const contacts = {
  address: {
    icon: location,
    text: "123 Maple Street, Springfield, IL, USA",
  },
  phone: {
    icon: phone,
    text: "+1 (650) 555-0198",
  },
  email: {
    icon: mail,
    text: "hello@abstractly.com",
  }
};
    return(
<div className={s.feedback}>
    <div className={s.container}>
        <div className={s.leftPanel}>
            <div className={s.header}>
                <p className={s.blackText}>Talk to our team</p>
                <p className={s.silverText}>Were committed to delivering the support you require to make your experience as smooth as possible.</p>
            </div>
          <div className={s.contacts}>
  {Object.entries(contacts).map(([key, { icon, text }]) => (
    <div className={s.contactItem} key={key}>
      <img src={icon} alt={key} className={s.icon} />

      <span className={s.text}>{text}</span>
    </div>
  ))}
</div>
        </div>
        <div className={s.rightPanel}>
            <form  className={s.form} action="#">
                <div className={s.inputRow}>
                    <label className={s.textarea} > Name
                    <Input 
                    type="text"
                    placeholder=" Your Name"
                    />
                    </label>
               <label className={s.textarea}> 
                Email
              <Input
              type="email" 
              placeholder="Enter your email"
              /></label>
                </div>
                <div className={s.textarea}>
<label htmlFor="textarea">Message</label>
<textarea 
maxLength={500}
name="textarea"
 id="textarea"
 placeholder="Write your message..."></textarea>
</div>
<Button label="Submit" type="primary" />
            </form>
        </div>
    </div>
</div>
    ); 
}
export default Feedback;
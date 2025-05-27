import s from "./FAQItem.module.scss";
import { useState } from "react";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState("false");

  return (
    <>
      <div
        className={s.FAQItem}
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <p className={s.question}>{question}</p>
        <p className={s.button}>{open ? "−" : "+"}</p>
      </div>
      {open && <p className={s.answear}>{answer}</p>}
      <hr />
    </>
  );
}
export default FAQItem;

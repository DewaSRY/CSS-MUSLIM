import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";

const ContactSection: FC = () => {
  return (
    <section id="contact" className={style.contact}>
      <form className="contact__form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea name="message" placeholder="Message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};
export default ContactSection;

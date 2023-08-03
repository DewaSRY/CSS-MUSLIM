import style from "./ContactSection.module.scss";
import BgImage from "../../assets/img/full-bg-03.jpg";
export function ContactSection() {
  return (
    <section
      id="contact"
      className={style["contact"]}
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <form className={style["contact-form"]}>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea name="message" placeholder="Message"></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

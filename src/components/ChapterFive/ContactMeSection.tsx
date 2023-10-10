import { FC } from "react";
// import style from "@styles/ChapterFive/index.module.scss";
import "@styles/ChapterFive/ContactSection.css";
const ContactSection: FC = () => {
  return (
    <section
      className="contact-background h-[60vh] flex items-end justify-end m-0 "
      id="contact"
    >
      <form className="basis-[40rem] bg-five-tertiary-m flex flex-col  form-input">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea
          className="h-[30vh]"
          name="message"
          placeholder="Message"
        ></textarea>
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
};
export default ContactSection;

import style from "./Testimony.module.scss";
import testimonyOne from "../../assets/img/testimonials-1.jpg";
import testimonyTwo from "../../assets/img/testimonials-2.jpg";
import testimonyThree from "../../assets/img/testimonials-3.jpg";
import testimonyFour from "../../assets/img/testimonials-4.jpg";
const Testimony = [testimonyOne, testimonyTwo, testimonyThree, testimonyFour];
export function TestimonialSection() {
  return (
    <section id="testimonials" className={style["testimonials"]}>
      {Testimony.map((img, id) => (
        <div key={id} className={style["testimonials-card"]}>
          <div className={style["testimonials-card-img"]}>
            <img src={img} alt="tony" />
          </div>
          <div className={style["testimonials-card-content"]}>
            <h3 className={style["testimonials-card-content-title"]}>
              Remarkable Eye
            </h3>
            <p className={style["testimonials-card-content-para"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sunt quis cupiditate ducimus non esse?
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

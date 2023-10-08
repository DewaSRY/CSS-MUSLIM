import { FC } from "react";
import style from "@styles/ChapterFive/index.module.scss";
import TestimonialOne from "@/assets/img/testimonials-1.jpg";
import TestimonialTwo from "@/assets/img/testimonials-2.jpg";
import TestimonialThree from "@/assets/img/testimonials-3.jpg";
import TestimonialFour from "@/assets/img/testimonials-4.jpg";
const Testimonial: FC = () => {
  const Testimonials = [
    {
      title: "Remarkable Eye",
      image: TestimonialOne,
    },
    {
      title: "Catchy Designs",
      image: TestimonialTwo,
    },
    {
      title: "Smoking Websites",
      image: TestimonialThree,
    },
    {
      title: "Easy to work with",
      image: TestimonialFour,
    },
  ];
  return (
    <section id="testimonials" className={style.testimonials}>
      {Testimonials.map((testimonial) => (
        <div key={Math.random() * 100}>
          <div>
            <img src={testimonial.image} alt="tony" />
          </div>
          <div className={style.cardContent}>
            <h3>{testimonial.title}</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sunt quis cupiditate ducimus non esse?
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonial;

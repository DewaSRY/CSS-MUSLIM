import { FC } from "react";
import TestimonialOne from "@/assets/img/testimonials-1.jpg";
import TestimonialTwo from "@/assets/img/testimonials-2.jpg";
import TestimonialThree from "@/assets/img/testimonials-3.jpg";
import TestimonialFour from "@/assets/img/testimonials-4.jpg";
import "@styles/ChapterFive/Testimonial.css";
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
    <section
      id="testimonials"
      className="bg-five-secondary flex flex-wrap justify-evenly py-8 items-center text-white px-4"
    >
      {Testimonials.map((testimonial) => (
        <div
          key={Math.random() * 100}
          className="basis-[50rem]  grow overflow-hidden w-full h-full testimony-img rounded-[3rem] mb-12 shadow-2xl mx-4 "
        >
          {/* <div className="w-full"> */}
          <img
            src={testimonial.image}
            alt="tony"
            className="object-cover w-full h-full "
          />
          {/* </div> */}
          <div className=" testimony-text">
            <h3 className="text-3xl mb-8 md:text-6xl">{testimonial.title}</h3>
            <p className="text-2xl md:text-5xl">
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

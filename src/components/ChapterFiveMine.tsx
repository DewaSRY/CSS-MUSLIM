import { FC, Fragment } from "react";
import style from "@/styles/ChapterFive.module.scss";
import SideImage from "@/assets/img/logo-01.jpg";
import PortFoOne from "@/assets/img/portfolio-branding-01-1.jpg";
import PortFoTwo from "@/assets/img/portfolio-branding-02-1.jpg";
import PortFoThree from "@/assets/img/portfolio-creative-01-1.jpg";
import PortFoFour from "@/assets/img/portfolio-creative-02-1.jpg";
import PortFoFive from "@/assets/img/portfolio-design-01-1.jpg";
import PortFoSIx from "@/assets/img/portfolio-print-02-1.jpg";
import PersonImage from "@/assets/img/content-img-02.jpg";
import TestimonialOne from "@/assets/img/testimonials-1.jpg";
import TestimonialTwo from "@/assets/img/testimonials-2.jpg";
import TestimonialThree from "@/assets/img/testimonials-3.jpg";
import TestimonialFour from "@/assets/img/testimonials-4.jpg";
import {
  BiLogoFacebook,
  BiLogoTwitter,
  BiLogoLinkedin,
  BiLogoInstagram,
  BiLogoPinterest,
  BiLogoDribbble,
} from "react-icons/bi";
import {
  FaQuidditch,
  FaMobileAlt,
  FaTasks,
  FaPaintRoller,
  FaEdit,
  FaProjectDiagram,
} from "react-icons/fa";
const Navigation: FC = () => {
  return (
    <header className={style.navigation}>
      <nav>
        <div className="hamburger">
          <div className="line line-1"></div>
          <div className="line line-2"></div>
          <div className="line line-3"></div>
        </div>

        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Hire Me</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
const SocialBar: FC = () => {
  return (
    <aside className={style.sideNav}>
      <div>
        <img src={SideImage} alt="logo" />
      </div>
      <ul>
        <li>
          <a href="#">
            <BiLogoFacebook className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoTwitter className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoLinkedin className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoInstagram className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoPinterest className="icon" />
          </a>
        </li>
        <li>
          <a href="#">
            <BiLogoDribbble className="icon" />
          </a>
        </li>
      </ul>
    </aside>
  );
};

const HeroShowcase: FC = () => {
  return (
    <section id="showcase" className={style.showcase}>
      <div>
        <h1>Scarlet Tyler</h1>
        <p>UX Designer / Frontend Developer</p>
        <a href="#" className="showcase__content--link">
          My Work
        </a>
      </div>
    </section>
  );
};
const WorkSection: FC = () => {
  return (
    <section className={style.work}>
      <div>
        <img src={PortFoOne} alt="" />{" "}
      </div>
      <div>
        <img src={PortFoTwo} alt="" />
      </div>
      <div>
        <img src={PortFoThree} alt="" />
      </div>
      <div>
        <img src={PortFoFour} alt="" />
      </div>
      <div>
        <img src={PortFoFive} alt="" />
      </div>
      <div>
        <img src={PortFoSIx} alt="" />
      </div>
    </section>
  );
};
const AboutMe: FC = () => {
  return (
    <section id="about-me" className={style.aboutMe}>
      <div className="about-me__img">
        <img src={PersonImage} alt="ME" />
      </div>

      <div className="about-me__content">
        <h2 className="about-me__content--title">About Me</h2>
        <p className="about-me__content--para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          laudantium maiores aliquid magni debitis ipsum delectus impedit iure
          distinctio, sint tempora asperiores odit tempore temporibus incidunt,
          non ex expedita sunt.
        </p>
        <a href="#" className="about-me__content--link">
          Read More
        </a>
      </div>
    </section>
  );
};
const ServiceSection: FC = () => {
  const services = [
    {
      icon: <FaQuidditch />,
      title: "UI Design",
    },
    {
      icon: <FaTasks />,
      title: "Web Development",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Development",
    },
    {
      icon: <FaPaintRoller />,
      title: "Type Design",
    },
    {
      icon: <FaEdit />,
      title: " Blog Writer",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Web Development",
    },
  ];
  return (
    <section className={style.serviceSection}>
      {services.map((service) => (
        <div key={Math.random() * 10000}>
          {service.icon}
          <h3>{service.title}</h3>
          <p className="services--para services__service-2--para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            nisi, atque deserunt iste ipsa odit!
          </p>
        </div>
      ))}
    </section>
  );
};

const ProgressBar: FC<{
  percentage: number;
}> = ({ percentage }) => {
  return (
    <div className={style.ProgressBar}>
      <span
        className="skills__design--progress__1"
        style={{
          width: percentage + "%",
        }}
      ></span>
    </div>
  );
};
const SkillsSection: FC = () => {
  const designSkills = [
    {
      title: "Web Design",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Print Design",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Logo Design",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Graphic Design",
      progress: <ProgressBar percentage={80} />,
    },
  ];
  const coddingSkills = [
    {
      title: "HTML / CSS",
      progress: <ProgressBar percentage={95} />,
    },
    {
      title: "JavaScript",
      progress: <ProgressBar percentage={80} />,
    },
    {
      title: "Python",
      progress: <ProgressBar percentage={65} />,
    },
    {
      title: "SQL",
      progress: <ProgressBar percentage={90} />,
    },
  ];
  return (
    <section id="skills" className={style.SkillsSection}>
      <div className="skills__design">
        <h3 className="skills__design--title">Design Skills</h3>
        {designSkills.map((skills, id) => (
          <Fragment key={id}>
            <h4>{skills.title}</h4>
            {skills.progress}
          </Fragment>
        ))}
      </div>

      <div className="skills__coding">
        <h3 className="skills__coding--title">Coding Skills</h3>
        {coddingSkills.map((skills, id) => (
          <Fragment key={id}>
            <h4>{skills.title}</h4>
            {skills.progress}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
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

const ChapterVive: FC = () => {
  // useEffect(() => {
  //   const hamburgerContainer = document.querySelector(
  //     "#header__main-nav"
  //   ) as HTMLElement;
  //   const hamburger = document.querySelector(
  //     ".header__main-nav--hamburger"
  //   ) as HTMLElement;
  //   const links = document.querySelectorAll(".header__main-nav--links li");
  //   hamburger.addEventListener("click", () => {
  //     hamburgerContainer.classList.toggle("clicked");
  //     links.forEach((link) => {
  //       link.classList.toggle("fade");
  //     });
  //   });
  // }, []);
  return (
    <div className={style.container}>
      <SocialBar />
      <main>
        <Navigation />
        <HeroShowcase />
        <WorkSection />
        <AboutMe />
        <ServiceSection />
        <SkillsSection />
        <Testimonial />
        <ContactSection />
      </main>
    </div>
  );
};

export default ChapterVive;

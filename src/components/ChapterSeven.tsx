import { FC } from "react";
import style from "@/styles/ChapterSeven.module.scss";
import GalleryOne from "@/assets/imgTwo/Gallery/gallery-1.jpg";
import GalleryTwo from "@/assets/imgTwo/Gallery/gallery-2.jpg";
import GalleryThree from "@/assets/imgTwo/Gallery/gallery-3.jpg";
import GalleryFour from "@/assets/imgTwo/Gallery/gallery-4.jpg";
import GalleryFive from "@/assets/imgTwo/Gallery/gallery-5.jpg";
import GallerySix from "@/assets/imgTwo/Gallery/gallery-6.jpg";
import GallerySeven from "@/assets/imgTwo/Gallery/gallery-7.jpg";
import GalleryEight from "@/assets/imgTwo/Gallery/gallery-8.jpg";
import GalleryNine from "@/assets/imgTwo/Gallery/gallery-9.jpg";
import GalleryTen from "@/assets/imgTwo/Gallery/gallery-10.jpg";

import {
  FaSun,
  FaClock,
  FaCaretRight,
  FaCaretLeft,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
const FooterContent: FC = () => {
  return (
    <footer id="footer" className={style.footer}>
      <p>All Rights Reserved. &copy; VLV</p>
      <div className="footer__social">
        <a href="#" className="footer__social--link">
          <FaFacebook />
        </a>
        <a href="#" className="footer__social--link">
          <FaTwitter />
        </a>
        <a href="#" className="footer__social--link">
          <FaLinkedinIn />
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="#" className="footer__social--link">
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};
const NavigationComponent: FC = () => {
  return (
    <nav className={style.headerMineNav}>
      <input type="checkbox" />
      <div className={style.hamburger}>
        <div></div>
      </div>
      <div className={style.navMenu}>
        <div>
          <div>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Villas</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
const HeaderLogo: FC = () => {
  return (
    <div className={style.HeaderLogo}>
      <a href="#" className={style.logo}>
        <span>V</span>L<span>V</span>
      </a>

      <div className={style.content}>
        <h1 className="header__logo__content--content__title">
          Relax Your Soul
        </h1>
        <p className="header__logo__content--content__para">
          The team of VLV welcomes you. Start relaxing your soul and enjoy your
          stay.
        </p>
        <a href="#" className="header__logo__content--content__link">
          Discover More
        </a>
      </div>
    </div>
  );
};
const BookingContent: FC = () => {
  return (
    <section id="booking-content" className={style.BookingContent}>
      <h2 className="booking-content__title">Discover Serenity</h2>
      <p className="booking-content__para">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        perferendis numquam, ipsam cupiditate at molestias. Sequi similique,
        molestiae nostrum dicta, unde modi libero fugiat suscipit, labore neque
        dolorum quos iste!
      </p>

      <div className={style.icons}>
        <div className="booking-content__icons--weather">
          <FaSun />
          <p>
            24<sup>&#8451;</sup>
          </p>
        </div>

        <div className="booking-content__icons--time">
          <FaClock />
          <p>05:00 PM</p>
        </div>
      </div>
    </section>
  );
};
const BookingDate: FC = () => {
  const dates = [
    {
      title: "Arrival",
      mont: "May",
      day: "09",
    },
    {
      title: "Departure",
      mont: "May",
      day: "23",
    },
    {
      title: "",
      mont: "May",
      day: "09",
    },
  ];
  return (
    <section id="booking-date" className={style.BookingDate}>
      <div className={style.schedule}>
        {dates.map((date) => (
          <div key={Math.random() * 100} className={style.date}>
            <h5>{date.title}</h5>
            <div>
              <p>{date.mont.trim().length ? date.mont : "&#65087"}</p>
              <p>{date.day}</p>
              <p>&#65088;</p>
            </div>
          </div>
        ))}
      </div>

      <div className={style.content}>
        <a href="#" className="booking-date__contact--link">
          Make a Reservation
        </a>
        <p>Reservation Hotline</p>
        <p>+1-5263-8965-6547</p>
        <p>Reservation Assistance Available 24 Hours</p>
      </div>
    </section>
  );
};
const VialsComponents: FC = () => {
  const villas = [
    {
      title: "Standard Villa",
      price: 200.0,
    },
    {
      title: "Superior Villa",
      price: 300.0,
    },
    {
      title: "Infinity Villa<",
      price: 700.0,
    },
    {
      title: "Ultra Villa",
      price: 1100.0,
    },
    {
      title: "Galactic Villa",
      price: 1300.0,
    },
    {
      title: "Cosmic Villa",
      price: 1500.0,
    },
  ];
  return (
    <section id="villas" className={style.VialsComponents}>
      {villas.map((villa, id) => (
        <div key={id} className={style.villas}>
          <h2 className="villas__villa-1--title">{villa.title}</h2>
          <p className="villas__villa-1--para">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias
            rerum ipsum commodi velit? Ut, eaque eos. Nostrum voluptas ratione
            perspiciatis rem veniam incidunt molestias.
          </p>
          <a href="#" className="villas__villa-1--link">
            Starting at ${villa.price}
          </a>
        </div>
      ))}
    </section>
  );
};
const MottoComponent: FC = () => {
  return (
    <section id="motto" className={style.MottoComponent}>
      <div className="motto__content">
        <h2 className="motto__content--title">We Reimagined Luxury</h2>
        <p className="motto__content--para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          tempore. Quas, sint assumenda quasi provident iusto adipisci porro
          minus, odit suscipit quidem quouos enim aspernatur vitae fugiat cum
          consequuntur motias.
        </p>
      </div>
    </section>
  );
};
const EventContent: FC = () => {
  const eventContents = ["Beach Party", "Culture Discovery"];
  return (
    <>
      <section id="events-content" className={style.EventContent}>
        {eventContents.map((event) => (
          <div key={Math.random() * 100} className="events-content__event-1">
            <h2 className="events-content__event-1--title">{event}</h2>
            <p className="events-content__event-1--para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex esse
              mollitia beatae expedita molestiae blanditiis laboriosam, sint
              provident iure in!
            </p>
          </div>
        ))}
      </section>
      <section id="events-text" className={style.eventsText}>
        <div className="events-text__content">
          <h2 className="events-text__content--title">Events</h2>
        </div>
      </section>
    </>
  );
};
const GallerySection: FC = () => {
  const galleries = [
    GalleryOne,
    GalleryTwo,
    GalleryThree,
    GalleryFour,
    GalleryFive,
    GallerySix,
    GallerySeven,
    GalleryEight,
    GalleryNine,
    GalleryTen,
  ];
  return (
    <>
      <section id="gallery-text" className={style.galleryText}>
        <div className="gallery-text__content">
          <h2 className="gallery-text__content--title">Gallery</h2>
        </div>
      </section>

      <section id="gallery-carousel" className={style.galleryCarousel}>
        <button className="gallery-carousel__btn gallery-carousel__btn--left hidden">
          <FaCaretLeft />
        </button>

        <div className={style.imageContainer}>
          <ul className="gallery-carousel__img-container--list">
            {galleries.map((img) => (
              <li
                key={Math.random() * 100}
                className="gallery-carousel__img-container--list__item current--img"
              >
                <img src={img} alt="villa" />
              </li>
            ))}
          </ul>
        </div>

        <button className="gallery-carousel__btn gallery-carousel__btn--right">
          <FaCaretRight />
        </button>

        <div className={style.galleryNav}>
          {galleries.map((_img, idx) => (
            <button
              key={idx * Math.random()}
              className={`${idx === 0 ? "current--img" : ""}`}
            ></button>
          ))}
        </div>
      </section>
    </>
  );
};

const FeatureContent: FC = () => {
  const features = ["Cocktail Package", "Surfing Package"];
  return (
    <>
      <section className={style.FeaturesContent}>
        {features.map((feature, id) => (
          <div key={id} className="features-content__feature-1">
            <h2 className="features-content__feature-1--title">{feature}</h2>
            <p className="features-content__feature-1--para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a
              aperiam expedita aut hic praesentium maiores error quis odio, amet
              tenetur iure vitae. Fugit saepe dolores facilis nihil, voluptas
              laudantium.
            </p>
          </div>
        ))}
      </section>

      <section id="features-text" className={style.featuresText}>
        <div className="features-text__content">
          <h2 className="features-text__content--title">Features</h2>
        </div>
      </section>
    </>
  );
};

const TestimonialContent: FC = () => {
  const testimonials = [
    "Clark Lois",
    "Tony Stark",
    "Hope Pym",
    "Amanda Waller",
    "Steve Rogers",
    "Black Widow",
  ];
  return (
    <section id="testimonials" className={style.testimonials}>
      {testimonials.map((person, id) => (
        <div key={id} className="testimonials__card">
          <div className="testimonials__card--front">
            <h2>{person}</h2>
          </div>

          <div className="testimonials__card--back">
            <p>i am the first card that the user is gonna see and like :)</p>
          </div>
        </div>
      ))}
    </section>
  );
};

const ChapterSeven: FC = () => {
  return (
    <div className={style.mineContainer}>
      <header id="header" className={style.header}>
        <NavigationComponent />
        <HeaderLogo />
      </header>
      <BookingContent />
      <BookingDate />
      <VialsComponents />
      <MottoComponent />
      <EventContent />
      <GallerySection />
      <FeatureContent />
      <TestimonialContent />
      <FooterContent />
    </div>
  );
};

export default ChapterSeven;

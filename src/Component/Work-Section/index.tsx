import style from "./WorkSection.module.scss";
import breadingOne from "../../assets/img/portfolio-branding-01-1.jpg";
import breadingTwo from "../../assets/img/portfolio-branding-02-1.jpg";
import creativeOne from "../../assets/img/portfolio-creative-01-1.jpg";
import creativeTwo from "../../assets/img/portfolio-creative-02-1.jpg";
import design from "../../assets/img/portfolio-design-01-1.jpg";
import print from "../../assets/img/portfolio-print-02-1.jpg";

const imageCart = [
  breadingOne,
  breadingTwo,
  creativeOne,
  creativeTwo,
  design,
  print,
];

export function WorkSection() {
  return (
    <section id="work" className={style["work"]}>
      {imageCart.map((img, id) => (
        <div key={id} className={style["work-card"]}>
          <img src={img} alt={img} />
        </div>
      ))}
    </section>
  );
}

{
  /* <div className="work__card">
<img src="img/portfolio-design-01-1.jpg" alt="poster" />
</div>

<div className="work__card">
<img src="img/portfolio-creative-02-1.jpg" alt="paper-bag" />
</div>

<div className="work__card">
<img src="img/portfolio-creative-01-1.jpg" alt="cloth-bag" />
</div>

<div className="work__card">
<img src="img/portfolio-branding-02-1.jpg" alt="branding" />
</div>

<div className="work__card">
<img src="img/portfolio-branding-01-1.jpg" alt="cup" />
</div>

<div className="work__card">
<img src="img/portfolio-print-02-1.jpg" alt="book-cover" />
</div> */
}

import Hero from "../components/Hero";
import KeyBenefits from "../components/KeyBenefits";
import Testimonials from "../components/Testimonials";
import HeroFooter from "../components/HeroFooter";

export default function HomePage() {
  return (
    <div>
      <div id="hero"><Hero /></div>
      <div id="key-benefits"><KeyBenefits /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="hero-footer"><HeroFooter /></div>
    </div>
  );
}

import Hero from "../../components/Hero/hero";
//import About from "../../components/About/about";
import OurServices from "../../components/OurServices/ourServices";
//import Portfolio from "../../components/Portfolio/portfolio";
//import Skills from "../../components/Skills/skills";
//import Testimonials from "../../components/Testimonials/testimonials";
import Contact from "../../components/Contact/contact";
import Footer from "../../components/Footer/footer";
import Carousel from "../../components/Carousel/carousel";

function Home() {
  return (
      <section>
        <Hero />
        <OurServices />
        {/*<About/>*/}
        {/*<Portfolio />*/}
        {/*<Skills />
        <Testimonials />*/}
        <Carousel />
        <Contact />
        <Footer />
      </section>
  );
}

export default Home
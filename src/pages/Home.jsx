import ImageCarousel from "../components/ImageCarousel";
import ComInfo from "../components/ComInfo";
import CentreImage from "../components/CentreImage";
import About from "../components/About";
import CentreImage2 from "../components/CentreImage2";
import AboutApp from "../components/AboutApp";
import AppFeatures from "../components/AppFeatures";
import Values from "../components/Values";
import ContactUs from "../components/ContactUs";
import FooterSlider from "../components/FooterSlider";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AppDetailsTemp from "../components/AppDetailsTemp";

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageCarousel />
      <ComInfo />
      <CentreImage />
      <About />
      <CentreImage2 />
      <AboutApp />
      <AppDetailsTemp />
      {/* <AppFeatures /> */}
      <Values />
      <ContactUs />
      <FooterSlider />
      <Footer />
    </div>
  );
}

import img1 from "../images/Image11.webp";
import img2 from "../images/Image12.webp";
import { color, motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function About() {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    color:"white"

  };
  return (
    <div className="flex flex-col lg:flex-row  gap-[2.625rem] mx-[5%] 2xl:mx-[15%]  2xl:gap-[4rem] my-[2.54rem] lg:my-[5.474rem] xl:mx-[10%]">
      <div className="bg-black hover:bg-[#252122] rounded-[1.64rem] lg:w-6/12 lg:rounded-[2.778rem] flex flex-col justify-between ">
        <motion.div
          initial={{
            opacity: 0,
            // if odd index card,slide from right instead of left
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0, // Slide in to its original position
            transition: {
              duration: 1, // Animation duration
            },
          }}
          viewport={{ once: true }}
          className="pl-[2.51rem] pt-[2.57rem] pr-[3.46rem] lg:pb-8"
        >
          {" "}
          <h1 className="text-[#F49C25] text-[2.04rem] font-bold pb-[0.46rem] lg:text-[3.07rem]">
            Who Are We
          </h1>
          <h2 className="text-[#FFF1E1] pb-[2.52rem] text-[1.03rem] lg:text-[1.556rem]   ">
            Founded on the principles of inclusivity, health, and connectivity.
            We are a movement towards creating a more engaged, healthy, and
            united community. We excel in orchestrating diverse sports and
            gathering events, all geared to bring people together, breaking down
            barriers and creating platforms for mutual understanding and
            support.
          </h2>
        </motion.div>
        <img
          className="rounded-b-[1.64rem]  lg:rounded-b-[2.778rem] lg:h-[21.274rem] object-cover"
          src={img1}
          alt=""
        />
      </div>{" "}
      <div className="bg-black hover:bg-[#252122] gap-10  lg:w-6/12 rounded-[1.64rem]  lg:rounded-[2.778rem] flex flex-col justify-between">
        <Slider {...settings}>
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="pl-[2.51rem] pt-[2.57rem] pr-[3.46rem] lg:h-[33.088rem]"
          >
            {" "}
            <h1 className="text-[#F49C25] text-[2.04rem] font-bold pb-[0.46rem] lg:text-[3.07rem]">
              Vision
            </h1>
            <h2 className="text-[#FFF1E1]  text-[1.03rem] lg:text-[1.556rem]   ">
              We envision a world where sports and events are not just
              activities, but catalysts for forging enduring relationships,
              nurturing holistic health, and building resilient generations. Our
              aim is to be at the forefront of a societal shift towards
              inclusivity, wellness, and mutual support, making the joy of
              shared experiences and the pursuit of personal growth accessible
              to all.
            </h2>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              // if odd index card,slide from right instead of left
              y: 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0, // Slide in to its original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
            viewport={{ once: true }}
            className="pl-[2.51rem] pt-[2.57rem] pr-[3.46rem] lg:h-[33.088rem]"
          >
            {" "}
            <h1 className="text-[#F49C25] text-[2.04rem] font-bold pb-[0.46rem] lg:text-[3.07rem]">
              Mission
            </h1>
            <h2 className="text-[#FFF1E1] text-[1.03rem] lg:text-[1.556rem] ">
              Our mission is to create a dynamic platform that unites diverse
              communities through sports,events, and festivals, fostering
              inclusivity and wellness. We strive to connect people from all
              cultures, enhancing mutual understanding and support through
              enriching experiences. By making these collective opportunities
              widely accessible, we empower individuals and communities to
              celebrate cultural diversity and pursue holistic health together.
            </h2>
          </motion.div>{" "}
        </Slider>
        <img
          className="rounded-b-[1.64rem]  lg:rounded-b-[2.778rem] lg:h-[21.274rem] object-cover"
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
}

export default About;

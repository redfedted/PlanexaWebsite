import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/Image1.webp";
import img2 from "../images/Image4.webp";
import img3 from "../images/Image2.webp";
import img4 from "../images/Image5.webp";
import img5 from "../images/Image3.webp";
// import img6 from "../images/Image1.png";
// import img7 from "../svgs/googleplay.svg";
// import img8 from "../svgs/applestore.svg";
// import img1 from "/src/images/img1.jpg";
// import img2 from "/src/images/img2.jpg";
// import img3 from "/src/images/img3.jpg";
// import img4 from "/src/images/img4.jpg";
// import img5 from "/src/images/img5.jpg";

import img7 from "../svgs/googleplay.svg";
import img8 from "../svgs/applestore.svg";
import { useNavigate } from "react-router-dom";

function ImageCarousel() {
  const settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
  };

  const navigate = useNavigate();

  return (
    <div className="relative w-full ">
      <Slider {...settings}>
        {" "}
        <img
          className=" h-[19.029rem] 2xl:h-[50rem] lg:h-[38.6rem] object-center object-cover"
          src={img1}
          alt=""
        />
        <img
          className=" h-[19.029rem] 2xl:h-[50rem]  lg:h-[38.6rem] object-center object-cover"
          src={img2}
          alt=""
        />
        <img
          className=" h-[19.029rem]  2xl:h-[50rem] lg:h-[38.6rem] object-center object-cover"
          src={img3}
          alt=""
        />
        <img
          className=" h-[19.029rem] 2xl:h-[50rem]  lg:h-[38.6rem] object-center object-cover"
          src={img4}
          alt=""
        />
        <img
          className=" h-[19.029rem]  2xl:h-[50rem] lg:h-[38.6rem] object-center object-cover"
          src={img5}
          alt=""
        />
        {/* <div className="bg-[url('src/images/Image1.png')] bg-cover">
          <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
            You plan,
            <br /> We execute
          </h1>{" "}
        </div>{" "}
        <div className="bg-[url('src/images/Image1.png')] bg-cover">
          <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
            You plan,
            <br /> We execute
          </h1>{" "}
        </div>{" "}
        <div className="bg-[url('src/images/Image1.png')] bg-cover">
          <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
            You plan,
            <br /> We execute
          </h1>{" "}
        </div>{" "}
        <div className="bg-[url('src/images/Image1.png')] bg-cover">
          <h1 className="  text-[3.12rem] text-white font-semibold pl-[2.21rem] py-[5.95rem] leading-[3.54rem]">
            You plan,
            <br /> We execute
          </h1>{" "}
        </div> */}
      </Slider>
      <div className=" text-[3.12rem] flex flex-col 2xl:pl-36 text-white absolute top-[0%] lg:top-[20%] font-semibold pl-[2.21rem] py-[5rem] leading-[3.54rem] lg:text-[6.37rem] lg:gap-16  ">
        {" "}
        <h1>You plan,</h1> <h1>We execute</h1>{" "}
      </div>{" "}
      <div className="  flex 2xl:pl-36  absolute top-[56%] lg:top-[60%] font-semibold pl-[2.21rem]  leading-[3.54rem]  lg:gap-16  ">
        {" "}
        <div className="flex 2xl:gap-[1rem] gap-[0.563rem] ">
          {" "}
          <button
            onClick={() => {
              navigate("/downloads");
            }}
          >
            <img className="lg:w-[200px]" src={img7} alt="" />
          </button>
          <button
            onClick={() => {
              navigate("/downloads");
            }}
          >
            <img className="lg:w-[200px]" src={img8} alt="" />
          </button>
        </div>
      </div>{" "}
    </div>
  );
}

export default ImageCarousel;

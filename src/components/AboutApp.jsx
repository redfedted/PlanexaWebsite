import img from "../images/Image9.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "/src/svgs/Howitworks1.svg";
import img2 from "/src/svgs/Howitworks2.svg";
import img3 from "/src/svgs/Howitworks3.svg";

function AboutApp() {
  return (
    <div className=" 2xl:mx-[10rem] text-[#252122] ">
      <div className=" items-center pt-[2.33rem] px-[1.63rem] pb-[5.09rem] lg:hidden  2xl:mx-[4rem] ">
        <h1
          className={`text-4xl font-bold mb-[1.33rem]  text-[#252122]   lg:text-[3.556rem]`}
        >
          How it works
        </h1>{" "}
        <h2 className="w-[10rem]  mb-[2.33rem] bg-[#252122] self-start h-0.5 lg:w-[16.41rem]"></h2>
        <img
          className="rounded-[1.83rem]  mb-[2.33rem] lg:w-[40%] lg:h-[48.137rem] lg:rounded-[2.778rem] cover"
          src={img}
          alt=""
        />{" "}
        <div className="flex flex-col gap-[3.031rem]">
          <div className="flex flex-col gap-2">
            <div className="flex gap-6">
              <img src={img1} alt="" />
              <div className="text-[2.266rem] w-7/12 font-semibold   leading-[2.95rem]">
                Download and Sign Up
              </div>
            </div>
            <h2 className="text-[1rem]    w-12/12  text-[#252122] ">
              Download our app from either the App Store or Google Play Store.
              Our intuitive user interface ensures a seamless onboarding
              process, making it effortless for you to get started.
            </h2>{" "}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-6">
              <img src={img2} alt="" />
              <div className="text-[2.266rem] font-semibold  w-8/12 leading-[2.95rem]">
                Create or join an event
              </div>
            </div>
            <h2 className="text-[1rem] font-normal w-11/12 text-[#252122]">
              Utilize our platform to effortlessly craft and personalize your
              events, which can then be seamlessly shared with your community
              through various channels. Explore and engage with a myriad of
              events in your vicinity, providing users with unparalleled
              opportunities to connect and participate.
            </h2>{" "}
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex ">
              <img src={img3} alt="" />
              <div className="text-[2.266rem]  font-semibold  leading-[2.95rem]">
                Organize, Payout and Connect.
              </div>
            </div>
            <h2 className="text-[1rem] font-normal w-11/12 text-[#252122]">
              Experience a wealth of features tailored to streamline event
              organization and planning, including scheduled payouts to
              alleviate post-event tasks. It's time for you to unwind and relish
              in your event, knowing that we've got you covered every step of
              the way.
            </h2>{" "}
          </div>
        </div>
      </div>
      <div className=" items-center mt-[5.474rem]  pb-[5.09rem] hidden lg:items-end lg:flex flex-row  justify-between xl:px-[5rem] ">
        <div className="w-5/12">
          {" "}
          <h1
            className={`text-4xl font-bold mb-[2.33rem]  text-[#252122] lg:text-[3.556rem] `}
          >
            How it works
          </h1>
          <h2 className="w-[5.56rem]  mb-[2.33rem] bg-[#252122] self-start h-0.5 lg:w-[16.41rem]"></h2>{" "}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              <div className="flex gap-6">
                <img src={img1} alt="" />
                <div className="text-[2.266rem] w-7/12 font-semibold   leading-[2.95rem] lg:w-5/12">
                  Download and Sign Up
                </div>
              </div>
              <h2 className="text-[1rem] lg:text-[1.25rem]   w-11/12  text-[#252122] ">
                Download our app from either the App Store or Google Play Store.
                Our intuitive user interface ensures a seamless onboarding
                process, making it effortless for you to get started.
              </h2>{" "}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-6">
                <img src={img2} alt="" />
                <div className="text-[2.266rem] font-semibold  w-8/12 leading-[2.95rem] lg:w-6/12">
                  Create or join an event
                </div>
              </div>
              <h2 className="text-[1rem] lg:text-[1.25rem]  font-normal w-11/12 text-[#252122]">
                Utilize our platform to effortlessly craft and personalize your
                events, which can then be seamlessly shared with your community
                through various channels. Explore and engage with a myriad of
                events in your vicinity, providing users with unparalleled
                opportunities to connect and participate.
              </h2>{" "}
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex ">
                <img src={img3} alt="" />
                <div className="text-[2.266rem]  font-semibold  leading-[2.95rem] lg:w-7/12">
                  Organize, Payout and Connect.
                </div>
              </div>
              <h2 className="text-[1rem] lg:text-[1.25rem]  font-normal w-11/12 text-[#252122]">
                Experience a wealth of features tailored to streamline event
                organization and planning, including scheduled payouts to
                alleviate post-event tasks. It's time for you to unwind and
                relish in your event, knowing that we've got you covered every
                step of the way.
              </h2>{" "}
            </div>
          </div>
        </div>
        <img
          className="  mb-[2.33rem] w-[50%] lg:h-[53rem]  lg:w-[34.875rem] 2xl:w-[40rem]  lg:rounded-[2.778rem] cover"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default AboutApp;

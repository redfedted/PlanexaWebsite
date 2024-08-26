import img7 from "../svgs/googleplay.svg";
import img8 from "../svgs/applestore.svg";
import Navbar from "../components/Navbar";

export default function InstallApp() {
  return (
    <div>
      <Navbar />
      <div className="justify-center mt-[15%] flex flex-col items-center">
        <h1 className="px-2 text-sm text-center sm:text-xl md:px-10">
          Download our app now by clicking the button below and enjoy a seamless
          experience on your device.
        </h1>
        <div className="flex 2xl:gap-[1rem] gap-[0.563rem]  ">
          {" "}
          <a href="" target="_blank">
            {" "}
            <button>
              <img className="lg:w-[200px]" src={img7} alt="" />
            </button>
          </a>
          <a href="" target="_blank">
            {" "}
            <button>
              {" "}
              <img className="lg:w-[200px]" src={img8} alt="" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

import svg1 from "../svgs/Facebook.svg";
import svg2 from "../svgs/Twitter.svg";
import svg3 from "../svgs/Instagram.svg";
import svg4 from "../svgs/Linkedin.svg";

function Footer() {
  return (
    <div className="flex flex-col mb-[3.35rem] ">
      <div className="flex items-center flex-col gap-[3.5rem]">
        {" "}
        <button
          className="bg-[#F49C25] text-xl font-medium p-[0.67rem] w-7/12 rounded-xl text-[#252122] lg:hidden
      "
        >
          Download app
        </button>
        <div className="flex gap-[2.11rem] lg:hidden">
          <a
            href="https://www.facebook.com/profile.php?id=61558578759650&mibextid=ZbWKwL"
            target="_blank"
          >
            <img src={svg1} alt="" />
          </a>
          <a
            href="https://www.instagram.com/planexa.ca?utm_source=qr&igsh=eXZiemwzdXU2eGY="
            target="_blank"
          >
            <img src={svg3} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/planexaca/" target="_blank">
            <img src={svg4} alt="" />
          </a>
        </div>{" "}
        <div className="text-[#252122] text-[1.42rem] font-semibold flex flex-col items-center  lg:self-start lg:items-start lg:pl-[4.688rem]">
          {" "}
          <h1>Contact us:</h1>
          <a
            href="mailto:info@planexa.ca"
            target="_blank"
            className="lg:font-bold"
          >
            info@planexa.ca
          </a>{" "}
          <a
            href="/deleteprofile"
            className="text-[1rem] lg:text-[1.1rem]   pt-4 underline"
          >
            Delete profile
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

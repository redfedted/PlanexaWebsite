import svg from "../svgs/Logo.svg";
import svg1 from "../svgs/Facebook.svg";
import svg2 from "../svgs/Twitter.svg";
import svg3 from "../svgs/Instagram.svg";
import svg4 from "../svgs/Linkedin.svg";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex  items-center justify-center lg:justify-between  h-[3.92rem] p-[1.26rem] 2xl:p-10">
      {" "}
      <img
        onClick={() => {
          navigate("/");
        }}
        className="h-[35px] 2xl:h-[50px]"
        src={svg}
        alt=""
      />{" "}
      <div className=" gap-[1.389rem] hidden lg:flex">
        {" "}
        <div className="  gap-[1.389rem] hidden lg:flex">
          <a
            href="https://www.facebook.com/profile.php?id=61558578759650&mibextid=ZbWKwL"
            target="_blank"
          >
            {" "}
            <img className="w-[1.381rem]  2xl:w-[2rem] " src={svg1} alt="" />
          </a>
          {/* <a href="">
            {" "}
            <img className="w-[1.381rem]" src={svg2} alt="" />
          </a> */}
          <a
            href="https://www.instagram.com/planexa.ca?utm_source=qr&igsh=eXZiemwzdXU2eGY="
            target="_blank"
          >
            {" "}
            <img className="w-[1.381rem]  2xl:w-[2rem]" src={svg3} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/planexaca/" target="_blank">
            <img className="w-[1.381rem]  2xl:w-[2rem]" src={svg4} alt="" />
          </a>
        </div>
        {/* <h1 className="text-[1rem] font-semibold lg:hidden ">Download</h1> */}
      </div>
    </div>
  );
}

export default Navbar;

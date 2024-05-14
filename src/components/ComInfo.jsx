import { motion } from "framer-motion";
import img1 from "../images/Image6.webp";

function ComInfo() {
  return (
    <div className="flex flex-col items-center px-[1.63rem] pt-[2.33rem] gap-[1.33rem] pb-[2.524rem] lg:flex-row lg:mx-[3.2rem] lg:my-[5.034rem] xl:mx-[10%] xl:gap-0">
      <div>
        <h1 className="font-bold pb-[1.33rem] text-4xl text-[#252122] lg:text-[3.55rem] lg:leading-[3.87rem] lg:pb-[2.33rem]">
          Transformative
          <br /> power of community engagement
        </h1>
        <h2 className="w-[5.56rem] bg-[#252122] self-start h-0.5 lg:w-[16.41rem]"></h2>
      </div>

      <img className="rounded-lg lg:w-[50%]" src={img1} alt="" />
    </div>
  );
}

export default ComInfo;

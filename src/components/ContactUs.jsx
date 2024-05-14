function ContactUs() {
  return (
    <div className="lg:flex  lg:items-center lg:justify-center lg:gap-[4.594rem] lg:mx-auto">
      <div className="hidden lg:flex text-[4rem] font-bold lg:w-[19.5rem]">
        <h1>Let us know what you think</h1>
      </div>
      <div className="bg-black flex flex-col items-center mx-[1.2rem] lg:mx-0 rounded-3xl py-[1.74rem] mb-[4.5rem]   lg:w-7/12 ">
        <h1 className="text-[#F49C25] pb-[1.74rem] lg:hidden font-medium text-[2rem] lg:text-[3.556rem] lg:self-start">
          Contact Us
        </h1>
        <form
          className="flex flex-col gap-[0.73rem] w-full px-[1.1rem] lg:px-[1.63rem] lg:gap-[1.5rem]  text-white"
          action="#"
        >
          <input
            className="bg-[#262626] pl-[1.31rem] py-[0.85rem] rounded-xl lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem] lg:h-[5.655rem]"
            type="text"
            placeholder="Name"
          />
          <input
            className="bg-[#262626] pl-[1.31rem] py-[0.85rem] rounded-xl lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem] lg:h-[5.655rem]"
            type="text"
            placeholder="Email"
          />
          <input
            className="bg-[#262626] flex flexs pl-[1.31rem] pt-[0.85rem] rounded-xl pb-[16.51rem] lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem]  lg:h-[22.809rem]"
            type="text"
            placeholder="Enter the message"
          />
          <button className="bg-[#F49C25] rounded-[0.75rem] py-2 text-xl font-medium lg:text-[2rem] lg:py-[1.75rem] lg:rounded-[1.556rem]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

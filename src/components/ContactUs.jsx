import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();
  // const [formData, SetFormData] = useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });

  // const handleChange = (e) => {
  //   console.log(form.current);
  //   const { name, email } = e.target;
  //   SetFormData({ ...formData, [name]: email });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0wcs8mq", "template_sx7t0pt", form.current, {
        publicKey: "Wcw7D5OR_vI0PwLoP",
      })
      .then(
        () => {
          alert("Email Sent!");
          console.log("SUCCESS!");
        },
        (error) => {
          alert("Failed to send, Try again later!");
          console.log("FAILED...", error.text);
        }
      );
  };

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
          onSubmit={sendEmail}
          ref={form}
        >
          <input
            className="bg-[#262626] pl-[1.31rem] py-[0.85rem] rounded-xl lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem] lg:h-[5.655rem]"
            type="text"
            placeholder="Name"
            name="from_name"
            // value={formData.name}
            // onChange={handleChange}
            required
          />
          <input
            className="bg-[#262626] pl-[1.31rem] py-[0.85rem] rounded-xl lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem] lg:h-[5.655rem]"
            type="email"
            placeholder="Email"
            // value={formData.email}
            // onChange={handleChange}
            name="from_email"
            required
          />
          <input
            className="bg-[#262626] flex flexs pl-[1.31rem] pt-[0.85rem] rounded-xl pb-[16.51rem] lg:text-[2rem] lg:pl-[2.75rem] lg:rounded-[1.556rem]  lg:h-[22.809rem]"
            type="text"
            placeholder="Enter the message"
            // value={formData.message}
            // onChange={handleChange}
            name="message"
            required
          />
          <button
            value="Send"
            className="bg-[#F49C25] rounded-[0.75rem] py-2 text-xl font-medium lg:text-[2rem] lg:py-[1.75rem] lg:rounded-[1.556rem]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

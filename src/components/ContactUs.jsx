import { useState } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactUs() {
  const [visible1, SetVisible1] = useState(false);
  const [visible2, SetVisible2] = useState(false);
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
  const handleTimer1 = () => {
    setTimeout(() => {
      SetVisible1(false);
    }, 5000);
  };
  const handleTimer2 = () => {
    setTimeout(() => {
      SetVisible2(false);
    }, 5000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0wcs8mq", "template_sx7t0pt", form.current, {
        publicKey: "Wcw7D5OR_vI0PwLoP",
      })
      .then(
        () => {
          SetVisible1(true);
          handleTimer1();
        },
        (error) => {
          SetVisible2(true);
          handleTimer2();
        }
      );
  };

  return (
    <div>
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
        {/* <button
          onClick={() => {
            SetVisible1(true);
            handleTimer1();
            // alert("Email Sent!");
            console.log("SUCCESS!");
          }}
        >
          Submiitttttt
        </button>{" "}
        <button
          onClick={() => {
            SetVisible2(true);
            handleTimer2();
            console.log("FAILED...");
            console.log("SUCCESS!");
          }}
        >
          Submiitttttt
        </button> */}
      </div>
      {visible1 && (
        <div class="bg-[#262626] text-center py-4 lg:px-4 fixed top-0 w-full">
          <div
            class="p-2 bg-[#f49c25] text-white leading-none lg:rounded-full flex items-center justify-center lg:inline-flex px-4 gap-8 lg:gap-2"
            role="alert"
          >
            {/* <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span> */}
            <span class="font-semibold text-left ">
              Thank you! We've recieved your message. someone from our team will
              contact you soon.
            </span>
            <button>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#262626"
                class="w-5 h-5"
                onClick={() => {
                  SetVisible1(false);
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {visible2 && (
        <div class="bg-[#262626] text-center py-4 lg:px-4 fixed top-0 w-full">
          <div
            class="p-2 bg-[#f49c25] text-white leading-none lg:rounded-full flex items-center justify-center lg:inline-flex px-4 gap-8 lg:gap-2"
            role="alert"
          >
            {/* <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
            New
          </span> */}
            <span class="font-semibold  ">
              There was a problem sending your message. Please try again later.
            </span>
            <button>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#262626"
                class="w-5 h-5"
                onClick={() => {
                  SetVisible2(false);
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;

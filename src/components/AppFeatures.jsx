import { motion } from "framer-motion";
import img from "/src/images/Image10.webp";
import yes from "../svgs/yes.svg";
import no from "../svgs/no.svg";

function AppFeatures() {
  const arr = [
    { feature: "Subscription", basic: "yes", premium: "*" },
    {
      feature: "Transaction Fees",
      basic: "0.5$+4.99% (games)",
      premium: "*",
    },
    { feature: "Chat", basic: "yes", premium: "yes" },
    { feature: "Organize event", basic: "yes", premium: "yes" },
    { feature: "Create group/account", basic: "2", premium: "*" },
    { feature: "Admin group/event", basic: "2", premium: "*" },

  ];
  // const arr = [
  //   "Subscription/Month",
  //   "Transaction Fees",
  //   "Chat",
  //   "Organize event",
  //   "Create",
  //   "Groups/Account",
  //   "Admin per group/event",
  //   "Host and organize",
  //   "Share events (URL)",
  //   "QR Code confirmation receipt",
  //   "Organize group/team",
  //   "Host free  events",
  //   "Monthly statement (Electronic)",
  //   "Request to join groups & chat",
  //   "Attendance log for events",
  //   "Scan to take attendance (admin)",
  //   "Spot attendance confirmation (admin)",
  //   "Fast payout",
  //   "Instant   payout/transaction",
  //   "Discount   Coupons",
  //   "Participant   waitlist",
  //   "Sponsor  Promotion",
  //   "Pop up Notification",
  //   "Promote classes/Reccuring events",
  //   "24*7 Support",
  // ];
  return (
    <div className="bg-[url('/src/images/Image10.webp')] bg-center box-border text-white   bg-cover lg:py-[6.313rem]   py-[2.111rem]">
      <div className="mx-auto w-[85%] lg:w-[90%]">
        {" "}
        <div className="grid grid-cols-2 justify-between pl-[0.938rem] lg:pl-[2.813rem] mb-1 font-bold bg-[#F49C25] text-[0.672rem] lg:text-[2.01rem]  mx-auto  py-[0.538rem]">
          <h1 className=" text-start">FEATURES</h1>{" "}
          <div className="grid grid-cols-2">
            {" "}
            <h1 className=" text-start">BASIC</h1>
            <h1 className="text-start">PREMIUM*</h1>
          </div>
        </div>{" "}
        {arr.map((e, index) => {
          return (
            <div
              key={index}
              className="grid grid-cols-2 gap-2  pl-[0.938rem]  lg:pl-[2.813rem] text-[#533F24] bg-[#FFF1E1] my-[0.149rem] text-[0.672rem]  lg:text-[2.01rem]    mx-auto  py-[0.538rem] font-medium"
            >
              <h1 className="text-start  lg:text-[2.01rem]   text-[0.9rem]">
                {e.feature}
              </h1>
              <div className="grid items-center grid-cols-2 ">
                {e.basic == "yes" || e.basic == "no" ? (
                  <img
                    className="lg:w-[1.6rem]"
                    src={e.basic == "yes" ? yes : no}
                    alt=""
                  />
                ) : (
                  <h1 className="text-start  lg:text-[2.01rem]   text-[0.8rem]">
                    {e.basic}
                  </h1>
                )}
                {e.premium == "yes" || e.premium == "no" ? (
                  <img
                    className="lg:w-[1.6rem]"
                    src={e.premium == "yes" ? yes : no}
                    alt=""
                  />
                ) : (
                  <h1 className="text-start  lg:text-[2.01rem]   text-[0.8rem] ">
                    {e.premium}
                  </h1>
                )}
              </div>
            </div>
          );
        })}
   
      </div ><h1 className="mx-auto w-[85%] lg:w-[90%] text-end text-[#B0B0B0] lg:text-[2.01rem]   text-[0.8rem]">*premium features are coming soon </h1>
    </div>
  );
}

export default AppFeatures;

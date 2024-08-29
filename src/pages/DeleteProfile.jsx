import { useState } from "react";
import Navbar from "../components/Navbar";

function Delete() {
  const [submit, SetSubmit] = useState(false);

  return (
    <div>
      <Navbar />
      <div>
        {window.scrollTo(0, 0)}
        {submit ? (
          <div>
            <h1 className="mx-6 text-xl text-center py-52 lg:text-3xl ">
              An email will be sent for confirmation
            </h1>
          </div>
        ) : (
          <div className="py-32 lg:py-32">
            <form
              onSubmit={() => {
                SetSubmit(true);
              }}
              className="flex flex-col items-center w-10/12 px-4 py-8 mx-auto bg-[#262626] border border-black border-solid rounded-xl lg:w-4/12"
            >
              <h1 className="mb-4 text-xl font-light lg:text-2xl lg:mb-6 text-[#f1f5fb]">
                Delete Profile
              </h1>
              <input
                type="email"
                name=""
                id=""
                placeholder="Email"
                className="mb-2 w-full rounded-lg bg-[#F1F5F9] px-4 lg:px-6 py-2 text-xs  lg:text-lg lg:mb-4 focus:text-black text-[#879FAF] "
              />
              <button className="w-full px-2 py-2 text-xs text-white rounded-lg bg-[#f59c23] lg:text-lg">
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Delete;

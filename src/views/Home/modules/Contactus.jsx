import React from "react";
import bgMask from "../../../assets/images/home/contactus/whitecorner.svg";

function ContactUs() {
  return (
    <div className="font-body">
      <img src={bgMask} alt="bgmask" className="absolute" />
      <div className="bg-black w-full py-28">
        <p className="text-white ml-32 text-4xl py-8">Contact Us</p>
        <div className="flex w-full">
          <div className="w-1/2 flex flex-col items-center">
            <form method="POST" className="flex flex-col items-start w-2/3">
              <div className="flex flex-col items-start bg-white w-full p-3 rounded-sm">
                <input
                  type="text"
                  className="py-2 w-full outline-none"
                  placeholder="Name"
                />
                <input
                  className="py-2 w-full outline-none"
                  type="text"
                  placeholder="Email"
                />
                <textarea
                  className="h-64 py-2 w-full outline-none"
                  type="text"
                  placeholder="Message"
                />
              </div>
              <button
                type="button"
                class="px-6 py-2.5 bg-red-500 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 transition duration-150 ease-in-out my-4"
              >
                SEND
              </button>
            </form>
          </div>
          <div className="w-1/2 text-white">
            <p className="opacity-70 my-1">ieeejmi@gmail.com</p>
            <p className="opacity-70 my-1">
              Jamia Millia Islamia, Jamia Nagar, New Delhi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

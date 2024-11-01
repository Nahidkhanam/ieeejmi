import React from "react";
import bgMask from "../../../assets/images/home/contactus/whitecorner.svg";

function ContactUs() {
  return (
    <div className="font-body" id="contact-form">
      {/* <img src={bgMask} alt="bgmask" className="absolute" /> */}
      <div className="alert alert-primary hidden w-1/3 fixed top-5 left-1/3 z-50" role="alert">
        Copied to clipboard!
    </div>
    <div className="flex w-full min-h-screen justify-center items-center overflow-hidden">
        <div className="flex md:flex-row md:space-x-12 md:space-y-0 flex-col space-y-6 bg-black w-full max-w-4xl p-8 rounded-xl shadow-lg text-white">
            <div className="flex flex-col justify-between space-y-8">
                <div>
                    <h1 className="font-bold text-4xl tracking-wide text-gray-300">Get in touch</h1>
                    <p className="pt-2 text-white text-lg">We're here to help! If you have any questions about IEEE, our events, membership, or opportunities to get involved, please don’t hesitate to reach out. We’d love to connect with you. Fill out the form, and we’ll get back to you as
                        soon as possible.</p>
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="inline-flex space-x-2 items-center hover:text-teal-300 transition-colors duration-300">
                        <ion-icon name="mail" className="text-teal-300 text-xl"></ion-icon>
                        <span id="emailText" className="hover:underline">ieeejmiteam@gmail.com</span></div>
                    <div className="inline-flex space-x-2 items-center hover:text-teal-300 transition-colors duration-300">
                        <ion-icon name="location" className="text-teal-300 text-xl"></ion-icon>
                        <a href="https://maps.app.goo.gl/mRT8Ez9ocQNdBmMb8" target="_blank" className="no-underline"><span>Jamia Millia Islamia, Jamia Nagar, New Delhi</span></a></div>
                </div>
                <div className="flex space-x-4 text-3xl ">
                    <a href="https://www.instagram.com/ieeejmi" className="transform transition-transform duration-200 hover:scale-110 text-teal-300 hover:text-teal-500">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                    <a href="https://in.linkedin.com/company/ieeejmi-sb" className="transform transition-transform duration-200 hover:scale-110 text-teal-300 hover:text-teal-500">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </div>
            </div>
            <div>
                <div className="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 animate-fadeIn">
                    <form method="POST" className="flex flex-col space-y-4">
                        <div className="space-y-2">
                            <label for="name" className="text-sm animate-float">Your Name</label>
                            <div className="flex items-center ring-1 ring-gray-300 rounded-md px-4 py-2 transition-shadow duration-300 focus-within:ring-2 focus-within:ring-teal-300 focus-within:shadow-lg">
                                <ion-icon name="person" className="text-black-400 mr-2 transition-colors duration-300 group-focus-within:text-teal-500"></ion-icon>
                                <input type="text" id="name" placeholder="Name" className="w-full outline-none "/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label for="email" className="text-sm animate-float">Email</label>
                            <div className="flex items-center ring-1 ring-gray-300 rounded-md px-4 py-2 transition-shadow duration-300 focus-within:ring-2 focus-within:ring-teal-300 focus-within:shadow-lg">
                                <ion-icon name="mail-unread" className="text-black-400 mr-2 transition-colors duration-300 group-focus-within:text-teal-500"></ion-icon>
                                <input type="text" id="email" placeholder="Email Address" className="w-full outline-none "/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label for="message" className="text-sm animate-float">Message</label>
                            <div className="flex items-start ring-1 ring-gray-300 rounded-md px-4 py-2 transition-shadow duration-300 focus-within:ring-2 focus-within:ring-teal-300 focus-within:shadow-lg">
                                <ion-icon name="text" className="text-black-600 mr-2 mt-1 transition-colors duration-300 group-focus-within:text-teal-500"></ion-icon>
                                <textarea id="message" rows="5" placeholder="Write something here" className="w-full outline-none resize-none"></textarea>
                            </div>
                        </div>

                        <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm transform transition duration-200 ease-in-out hover:scale-105 hover:bg-teal-800">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
        </div>
      </div>
  );
}

export default ContactUs;

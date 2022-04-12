import React from "react";
import 'tw-elements';
import "./ContactUs.css"


function ContactUs() {
  return <div className="contact-div">
  <p className="contact-head">Contact Us</p>
  <div className="grid grid-cols-2 gap-2">
     <div className="form-div">
      <form method="POST"> 
         <input type="text" className="contact-info" placeholder="Your Name"/>
         <br/>
         <input className="contact-info" type="text" placeholder="Your email"/>
         <br/>
         <textarea className="contact-info textarea" type="text" placeholder="Message"/>
         <br/>
         <button type="button" class=" px-6 py-2.5 bg-red-500 text-white font-semibold text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out">
         SEND
        </button>

      </form>
    </div>
    <div className="info-div">
      <p>ieeejmi@gmail.com</p>
      <p>Jamia Millia Islamia, Jamia Nagar, New Delhi</p>
    </div>
  </div>

   </div>;
}

export default ContactUs;

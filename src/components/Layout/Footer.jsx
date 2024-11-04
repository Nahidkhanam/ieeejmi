import React from 'react';
import IEEEJMI from "../../assets/logo/IEEEJMI.svg";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      <div className="container mx-auto flex flex-wrap justify-between max-w-5xl">
        {/* Left section with logo and contact */}
        <div className="flex-1 mx-3 mb-8">
          <img src={IEEEJMI} alt="IEEE JMI Student Branch Logo" className="w-36 mb-3" />
          <p className="text-gray-400">
            IEEE JMI: Institute of Electrical and Electronics Engineers Jamia Millia Islamia Student Branch.
          </p>
        </div>

        {/* Middle section with links */}
        <div className="flex-1 mx-3 mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">Explore</h3>
          <ul className="space-y-2">
          
            <li><a href="https://ieeejmi.org/" className="mx-3 md:font-semibold text-white/60 md:text-white/40 hover:text-white hover:text-lg transition-all">Home</a></li>
            <li><a href="https://ieeejmi.org/team" className="mx-3 md:font-semibold text-white/60 md:text-white/40 hover:text-white hover:text-lg transition-all">Team</a></li>
            <li><a href="https://ieeejmi.org/blogs" className="mx-3 md:font-semibold text-white/60 md:text-white/40 hover:text-white hover:text-lg transition-all">Blogs</a></li>
            <li><a href="https://ieeejmi.org/events" className="mx-3 md:font-semibold text-white/60 md:text-white/40 hover:text-white hover:text-lg transition-all">Events</a></li>
            <li><a href="#" className="mx-3 md:font-semibold text-white/60 md:text-white/40 hover:text-white hover:text-lg transition-all">Gallery</a></li>
          </ul>
        </div>

        {/* Right section with newsletter */}
        <div className="flex-1 mx-3 mb-8">
          <h3 className="text-lg font-semibold text-white mb-3">Join our newsletter to stay up-to-date.</h3>
          <p className="text-gray-400 mb-3">
            Join our subscribers list to get the latest news, update specials offers, and delivered directly in your inbox.
          </p>
          <div className="flex items-center mt-3">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 rounded-l-md flex-1 focus:outline-none text-gray-700"
            />
            <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-r-md font-bold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom with social icons */}
      <div className="bg-gray-700 py-3">
        <div className="container mx-auto flex items-center justify-center space-x-4 text-gray-400">
          <p>Follow Us On:</p>
          <a href="https://www.linkedin.com/company/ieeejmi-sb/posts/?feedView=all">
            <img src="/LinkedIn_logo_initials.png" alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/ieeejmi/">
            <img src="/Instagram_logo_2016.svg.webp" alt="Instagram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


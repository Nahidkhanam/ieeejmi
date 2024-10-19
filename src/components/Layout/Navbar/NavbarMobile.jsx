import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import IEEEJMI from "../../../assets/logo/IEEEJMI.svg";
import { Link } from "react-router-dom";
import route from "../routes";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen(!isOpen);
  }

  function Menu() {
    return (
      <div
        className="absolute transition-all bg-white top-10 w-4/5 left-0 overflow-hidden "
        style={{
          height: isOpen ? `${60 * route.length}px` : "0",
        }}
      >
        <ul className="list-none mt-1">
          {route.map((_, i) => {
            return (
              <Link to={_.path} key={i}>
                <li
                  className="font-semibold my-2 py-3 px-4 hover:bg-gray-100 transition-all "
                  onClick={() => setIsOpen()}
                >
                  {_.text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="md:hidden nav shadow-2xl sticky top-0 left-0 w-full bg-white flex font-body items-center justify-center  ">
        <div
          className="md:hidden flex flex-col items-start justify-center hover:cursor-pointer transition-all mr-auto py-3 px-2 group w-2/3 z-50 "
          onClick={() => setOpen()}
        >
          <div className="flex items-center">
            <GiHamburgerMenu />
            <span className="ml-2 font-semibold cursor-pointer">Menu</span>
            {Menu()}
          </div>
        </div>
        <div>
          <Link to="/">
            <img
              className="w-20"
              src={IEEEJMI}
              onClick={() => setIsOpen(false)}
            />
          </Link>
        </div>
      </div>
      <div
        className="w-full h-screen fixed top-0 left-0 bg-black transition-all -z-10"
        onClick={() => setIsOpen()}
        style={{
          pointerEvents: isOpen ? null : "none",
          opacity: isOpen ? 0.5 : 0,
        }}
      />
    </div>
  );
}

export default NavbarMobile;

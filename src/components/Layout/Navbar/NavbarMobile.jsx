import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import IEEEJMI from "../../../assets/logo/IEEEJMI.svg";
import { Link } from "react-router-dom";

function NavbarMobile() {
  const [isOpen, setIsOpen] = useState(false);

  function setOpen() {
    setIsOpen(!isOpen);
  }

  function Menu() {
    return (
      <div
        class="absolute transition-all bg-white top-10 w-4/5 left-0 overflow-hidden "
        style={{
          height: isOpen ? `${60 * Nav.length}px` : "0",
        }}
      >
        <ul className="list-none mt-1">
          {Nav.map((_, i) => {
            return (
              <Link to={_.path}>
                <li
                  class="font-semibold my-2 py-3 px-4 hover:bg-gray-100 transition-all "
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

  const Nav = [
    {
      path: "/",
      text: "Home",
    },
    {
      path: "/team",
      text: "Team",
    },
    {
      path: "/blogs",
      text: "Blogs",
    },
    {
      path: "/events",
      text: "Events",
    },
  ];
  return (
    <div>
      <div className="sm:hidden nav shadow-2xl z-50 fixed w-screen flex bg-white  font-body items-center justify-center  ">
        <div
          className="sm:hidden flex flex-col items-start justify-center transition-all mr-auto hover:bg-gray-100 py-3 px-2 group w-2/3 z-50 "
          onClick={() => setOpen()}
        >
          <div className="flex items-center">
            <GiHamburgerMenu />
            <span class="ml-2 font-semibold cursor-pointer">Menu</span>
            {Menu()}
          </div>
        </div>
        <div>
          <Link to="/">
            <img
              className="w-20 mx-3"
              src={IEEEJMI}
              onClick={() => setIsOpen(false)}
            />
          </Link>
        </div>
      </div>
      <div
        className="w-screen h-screen fixed top-0 left-0 bg-black transition-all"
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

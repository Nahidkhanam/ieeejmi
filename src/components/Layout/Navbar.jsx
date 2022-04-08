import React from "react";
import { Link } from "react-router-dom";

import IEEEJMI from "../../assets/logo/IEEEJMI.svg";

const route = [
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

function Navbar() {
  return (
    <div className="flex pl-10 pt-9 font-body absolute z-50">
      <img className="w-32" src={IEEEJMI} alt="IEEE JMI" />

      <div className="flex gap-4 ml-7">
        {route.map((item, index) => (
          <Link to={item.path} className="self-center" key={index}>
            <span>{item.text}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

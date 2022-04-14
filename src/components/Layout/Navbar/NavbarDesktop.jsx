import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

import IEEEJMI from "../../../assets/logo/IEEEJMI.svg";
import route from "../routes";

function Navbar() {
  const navigation = useNavigate();
  const [Navinfo, setNavinfo] = useState({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  });

  const location = useLocation();

  console.log(location);

  const ref = useRef(null);

  useEffect(() => {
    console.log("Current : ", ref.current);
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      console.log("Rect", rect);
      setNavinfo({
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: 50.6,
      });
    }
  }, [ref.current, location]);

  return (
    <div className="pl-10 pt-9 font-body absolute z-50 hidden md:flex">
      <img
        className="w-32"
        src={IEEEJMI}
        alt="IEEE JMI"
        onClick={() => {
          navigation("/");
        }}
      />

      <div
        className="bg-black rounded-full transition-all"
        style={{
          height: 2,
          width: `${Navinfo.width}px`,
          position: "absolute",
          top: `${Navinfo.y + Navinfo.height}px`,
          left: `${Navinfo.x}px`,
        }}
      />
      <div className="flex gap-4 ml-7">
        {route.map((item, index) => (
          <NavLink
            to={item.path}
            className="self-center"
            key={index}
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "normal" : "200",
              };
            }}
            ref={location.pathname === item.path ? ref : null}
          >
            <span>{item.text}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default Navbar;

import React from "react";
import HomeBg from "../../../assets/images/home/home_bg.jpg";
import { Slide, Fade } from "react-reveal";

function Landing() {
  const bgRef = React.useRef(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Fade up>
        <img
          className={`h-screen w-screen object-cover absolute top-0 -z-50 brightness-95`}
          src={HomeBg}
          alt="Home Background"
          ref={bgRef}
        />
      </Fade>
      <p className="absolute bottom-3 right-3 text-white font-body font-extralight">
        Credits to
        <a
          className="mx-2 text-sm bg-green-500/20 px-2 py-1 rounded-md hover:bg-green-300/45"
          href="https://www.instagram.com/ejaz_ahmed.jmi/"
        >
          Ejaz Ahmad
        </a>
      </p>
      <div className={`flex-grow flex flex-col justify-center font-body`}>
        <Slide left>
          <div
            className={`w-1/3 p-10 bg-slate-100/90 rounded-r-md py-14 shadow-2xl transition-all`}
          >
            <Slide left cascade>
              <h1 className={`text-6xl font-bold my-2`}>IEEE JMI</h1>
              <p className="text-xl font-extralight">Jamia Millia Islamia</p>
            </Slide>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Landing;

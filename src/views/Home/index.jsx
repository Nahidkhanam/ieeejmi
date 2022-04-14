import React from "react";
import Landing from "./modules/Landing";
import AboutUs from "./modules/Aboutus";
import SubBranches from "./modules/SubBranches";
import ContactUs from "./modules/Contactus";
import Events from "./modules/Events";
function Home() {
  return (
    <React.Fragment>
      <Landing />
      <AboutUs />
      <SubBranches />
      <Events />
      <ContactUs />
    </React.Fragment>
  );
}

export default Home;

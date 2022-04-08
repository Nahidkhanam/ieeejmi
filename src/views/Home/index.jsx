import React from "react";
import Landing from "./modules/Landing";
import AboutUs from "./modules/Aboutus";
import SubBranches from "./modules/SubBranches";
import ContactUs from "./modules/Contactus";
function Home() {
  return (
    <React.Fragment>
      <Landing />
      <AboutUs />
      <SubBranches />
      <ContactUs />
    </React.Fragment>
  );
}

export default Home;

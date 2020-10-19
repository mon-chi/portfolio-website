import React, { useState } from "react";
import Navbar from "../components/Navbar/index";
import Sidebar from "../components/Sidebar/index";
import HeroSection from "../components/HeroSection/Index";
import infoSection from "../components/InfoSection";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <infoSection />
    </>
  );
};

export default Home;

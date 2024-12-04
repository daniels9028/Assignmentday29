import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import banner from "./assets/banner.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner banner={banner} />
    </>
  );
};

export default App;

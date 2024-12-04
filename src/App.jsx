import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Apps from "./components/Apps";

import banner from "./assets/banner.png";

import services1 from "./assets/services1.png";
import services2 from "./assets/services2.png";
import services3 from "./assets/services3.png";
import services4 from "./assets/services4.png";
import services5 from "./assets/services5.png";
import services6 from "./assets/services6.png";

import apps1 from "./assets/apps1.png";
import apps2 from "./assets/apps2.png";

const services = [
  {
    id: 1,
    title: "Search Doctor",
    description:
      "Choose your doctor from thousands of specialist, general, and trusted hospitals",
    icon: services1,
  },
  {
    id: 2,
    title: "Online Pharmacy",
    description:
      "Buy your medicines with our mobile application with a simple delivery system",
    icon: services2,
  },
  {
    id: 3,
    title: "Consultation",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: services3,
  },
  {
    id: 4,
    title: "Details Info",
    description:
      "Free consultation with our trusted doctors and get the best recomendations",
    icon: services4,
  },
  {
    id: 5,
    title: "Emergency Care",
    description:
      "You can get 24/7 urgent care for yourself or your children and your lovely family",
    icon: services5,
  },
  {
    id: 6,
    title: "Tracking",
    description: "Track and save your medical history and health data",
    icon: services6,
  },
];

const apps = [
  {
    id: 1,
    title: "Leading healthcare providers",
    description:
      "Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride in the solutions we deliver",
    image: apps1,
  },
  {
    id: 2,
    title: "Download our mobile apps",
    description:
      "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
    image: apps2,
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Banner banner={banner} />
      <Services services={services} />
      <Apps apps={apps} />
    </>
  );
};

export default App;

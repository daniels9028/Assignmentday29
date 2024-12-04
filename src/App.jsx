import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import Apps from "./components/Apps";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

import banner from "./assets/banner.png";

import services1 from "./assets/services1.png";
import services2 from "./assets/services2.png";
import services3 from "./assets/services3.png";
import services4 from "./assets/services4.png";
import services5 from "./assets/services5.png";
import services6 from "./assets/services6.png";

import apps1 from "./assets/apps1.png";
import apps2 from "./assets/apps2.png";

import testimonial1 from "./assets/testimonial1.png";
import testimonial2 from "./assets/testimonial2.png";
import testimonial3 from "./assets/testimonial3.webp";
import testimonial4 from "./assets/testimonial4.webp";
import testimonial5 from "./assets/testimonial5.png";

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

const testimonials = [
  {
    id: 1,
    name: "Edward Newgate",
    position: "Founder Circle",
    testi:
      "“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”",
    image: testimonial1,
  },
  {
    id: 2,
    name: "Jack Grealish",
    position: "Founder Facebook",
    testi:
      "“Petal is an invaluable tool for individual researchers or teams sharing references with each other. Our group of 10, comprised of students and faculty members, uses it daily. The browser plugin and the automatic population of document properties with metadata makes adding references easy. The search capabilities and the recent AI additions are fantastic. Petal has truly simplified our workflow and enhanced our productivity.”",
    image: testimonial2,
  },
  {
    id: 3,
    name: "Michael Arteta",
    position: "Founder Twitter",
    testi:
      "“Superpark and Valo Motion have been working closely for many years. Both of our companies have a great dedication to testing and to product quality - as a result we installed over 50 systems in parks across the globe.”",
    image: testimonial3,
  },
  {
    id: 4,
    name: "Josh Steph",
    position: "Duke of USA",
    testi:
      "“The system has been really easy to operate and is one of our most popular attractions. We have already ordered more systems.”",
    image: testimonial4,
  },
  {
    id: 5,
    name: "Luke Tahn",
    position: "CEO of Blibli",
    testi:
      "“Nowhere in the industry have I experienced the kind of support Valo Motion offers. No matter what the issue is, we get help immediately.”",
    image: testimonial5,
  },
];

const footerLinks = [
  {
    id: 1,
    title: "Company",
    links: ["About", "Testimonials", "Find a doctor", "Apps"],
  },
  {
    id: 2,
    title: "Region",
    links: ["Indonesia", "Singapore", "Hongkong", "Canada"],
  },
  {
    id: 3,
    title: "Help",
    links: ["Help center", "Contact support", "Instructions", "How it works"],
  },
];

const App = () => {
  return (
    <>
      <Navbar />
      <Banner banner={banner} />
      <Services services={services} />
      <Apps apps={apps} />
      <Testimonials testimonials={testimonials} />
      <Footer footerLinks={footerLinks} />
    </>
  );
};

export default App;

import React, { Fragment } from "react";
import Head from "next/head";
import Navbar from "@/sections/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import WhyUs from "@/sections/WhyUs/WhyUs";
import Programs from "@/sections/Programs/Programs";
import Campus from "@/sections/Campus/Campus";
import Montessori from "@/sections/Montessori/Montessori";
import Admission from "@/sections/Admission/Admission";
import Footer from "@/sections/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Home - Boiler Code</title>
        {/* enter seo here */}
      </Head>
      <Navbar/>
      <Hero/>
      <About/>
      <WhyUs/>
      <Programs/>
      <Campus/>
      <Montessori/>
      <Admission/>
      <Footer/>
    </Fragment>
  );
};

export default Home;

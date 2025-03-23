"use client";

import TopBar from "../components/topBar";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Footer from "../components/footer";
import BodyLink from "@/components/bodyLinks";
import RightSidebar from "@/components/rightSidebar";

// src/pages/index.js
const Home = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block">
        <RightSidebar />
      </div>
      <div className="">
        <TopBar />
        <div className="lg:mx-25 mx-[2%]">
          <Header />
          <div className="">
            <HeroSection />
          </div>
        </div>
        <BodyLink />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

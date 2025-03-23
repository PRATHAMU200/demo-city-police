"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import heroImage1 from "../../public/back.png";
import heroImage2 from "../../public/back1.jpeg";
import heroImage3 from "../../public/back.png";
import OfficerGrid from "./officerGrid";

const heroImages = [heroImage1, heroImage2, heroImage3];

const HeroSection = () => {
  const [currentHero, setCurrentHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroImages.length);
    }, 2000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <a
      className="relative w-full min-h-[400px] flex flex-col"
      title="Republic Day Event"
    >
      {/* Background Image */}
      <Image
        src={heroImages[currentHero]}
        alt="Republic Day Event"
        fill
        className="absolute top-0 left-0 w-full mx-auto max-h-[450px] h-full object-cover -z-10 rounded-4xl"
      />

      {/* Officer Grid Positioned at the Bottom */}
      <OfficerGrid />
    </a>
  );
};

export default HeroSection;

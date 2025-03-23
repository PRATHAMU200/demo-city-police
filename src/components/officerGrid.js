import { useRef, useState, useEffect } from "react";
import OfficerCard from "./officerCard";
import devendraImage from "../../public/devendra.png";
import rashmiImage from "../../public/rashmi.png";
import dattatrayImage from "../../public/dattatray.png";
import shrikantImage from "../../public/shrikant.png";

const officers = [
  {
    name: "Shri. Devendra Fadnavis",
    title: "Hon'ble Chief Minister, Maharashtra State",
    imageUrl: devendraImage,
  },
  {
    name: "Smt. Rashmi Shukla (IPS)",
    title: "Directorate General Resettlement, Maharashtra State",
    imageUrl: rashmiImage,
  },
  {
    name: "Shri. Dattatray Karale (IPS)",
    title: "SP Inspector General of Police, Nashik Range",
    imageUrl: dattatrayImage,
  },
  {
    name: "Shri Shrikant Dhivare (IPS)",
    title: "Superintendent of Police, Dhule, Maharashtra State",
    imageUrl: shrikantImage,
  },
];

const OfficerGrid = () => {
  const slideRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0); // Default to first slide

  useEffect(() => {
    if (slideRef.current) {
      const slideWidth = slideRef.current.children[0]?.clientWidth || 278; // Get slide width dynamically
      slideRef.current.scrollTo({
        left: currentSlide * slideWidth,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  const goToSlide = (index) => {
    if (index >= 0 && index < officers.length) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="absolute left-0 w-full" style={{ top: "50%" }}>
      <div className="flex justify-center">
        <div className="w-[90%] bg-transparent p-4 rounded-xl shadow-lg">
          {/* Carousel container */}
          <div
            ref={slideRef}
            className="flex gap-3 overflow-x-auto scroll-smooth snap-x scrollbar-hide"
          >
            {officers.map((officer, index) => (
              <div
                key={index}
                className="snap-start flex-shrink-0"
                style={{ width: "278px" }}
              >
                <OfficerCard {...officer} />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Dot Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {officers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default OfficerGrid;

import { Dot } from "lucide-react";

// src/components/TopBar.js
const TopBar = () => {
  return (
    <div className="flex justify-around items-center space-x-4 px-6 py-2 text-sm bg-[#023347] text-white overflow-x-auto whitespace-nowrap scrollbar-hide">
      <a href="tel:112" title="Police Help contact number">
        Police Help: 112
      </a>
      <Dot className="flex-shrink-0" size={30} color="#2A8E9E" />
      <a href="tel:1093" title="Coastal Helpline number">
        Coastal Helpline: 1093
      </a>
      <Dot className="flex-shrink-0" size={30} color="#2A8E9E" />
      <a href="tel:1093" title="Financial/Online fraud help">
        Financial/Online fraud: 1930
      </a>
      <Dot className="flex-shrink-0" size={30} color="#2A8E9E" />
      <a href="tel:1093" title="Coastal Helpline number">
        Coastal Helpline: 1093
      </a>
      <Dot className="flex-shrink-0" size={30} color="#2A8E9E" />
      <a href="tel:8669609544" title="Women/Child helpline number">
        Women/Child helpline: 8669609544
      </a>
      <Dot className="flex-shrink-0" size={30} color="#2A8E9E" />
      <a href="tel:1093" title="Senior citizen helpline number">
        Senior citizen helpline: 1090
      </a>
      <Dot className="flex-shrink-0" size={30} color="#2A8E9E" />
      <a href="tel:02362228614" title="Control Room contact number">
        Control Room: 02362228614
      </a>
    </div>
  );
};

export default TopBar;

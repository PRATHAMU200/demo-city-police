// src/components/Footer.js
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-gray-100 p-2 text-center bottom-0 w-full mt-2 px-4">
      <div className="flex justify-between space-x-4">
        <div className="space-x-4 text-xs">
          <a href="#" className="text-gray-700 hover:underline">
            Copyright © 2025
          </a>
          <span>|</span>
          <a href="#" className="text-gray-700 hover:underline">
            Sitemap
          </a>
          <span>|</span>
          <a href="#" className="text-gray-700 hover:underline">
            Disclaimer
          </a>
          <span>|</span>
          <a href="#" className="text-gray-700 hover:underline">
            Visitors : 22503
          </a>
        </div>
        <div className="flex flex-wrap space-x-4">
          <a
            href="#"
            title="Facebook Link"
            className="text-gray-700 hover:text-blue-500"
          >
            <Facebook size={20} />
          </a>
          <a
            href="#"
            title="twitter Link"
            className="text-gray-700 hover:text-blue-400"
          >
            <Twitter size={20} />
          </a>
          <a
            href="#"
            title="Instagram Link"
            className="text-gray-700 hover:text-pink-500"
          >
            <Instagram size={20} />
          </a>
          <a
            href="#"
            title="youtube Link"
            className="text-gray-700 hover:text-red-500"
          >
            <Youtube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

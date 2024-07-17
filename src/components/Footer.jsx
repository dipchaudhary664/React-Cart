import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Logo and Company Info */}
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold mb-4">M-Commerce</h2>
            <p className="text-sm text-gray-400">
              M-Commerce, or Mobile Commerce, refers to buying and selling goods
              and services through mobile devices. It leverages mobile
              technology for convenient shopping, secure transactions via
              digital wallets, and personalized experiences.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center sm:text-left ">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400">123 Street, City, Country</p>
            <p className="text-sm text-gray-400">contact@example.com</p>
            <p className="text-sm text-gray-400">+66 123 456 789</p>
          </div>

          {/* Column 4: Social Media */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-700 mt-8 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
          &copy; 2024 Chaudhary Dip. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

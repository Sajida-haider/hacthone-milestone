"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-auto flex bg-[#00adb5] text-white text-center py-2 justify-center gap-5">
      <div>
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
        <div className="flex gap-12 justify-center mt-2">
          <FaFacebook size={24} />
          <FaYoutube size={24} />
          <FaWhatsapp size={24} />
          <FaInstagram size={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
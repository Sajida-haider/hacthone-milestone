"use client";
import React from "react";
import { FaFacebook, FaWhatsapp, FaYoutube, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
        <div className="footer-icons">
          <FaFacebook />
          <FaYoutube />
          <FaWhatsapp />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
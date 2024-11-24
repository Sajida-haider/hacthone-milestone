"use client";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import {FaWhatsapp } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="footer">
    <div>
     <p>&copy; 2024 My Portfolio. All Rights Reserved.</p>
    <div  className="footer-icons">
    <FaFacebook/>
    <FaYoutube/>
    <FaWhatsapp/>
    <FaInstagram/>
    </div>
    </div>

    
    
    </footer> 
  )
}

export default Footer;
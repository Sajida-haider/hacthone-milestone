import React from 'react';
import Link from 'next/link';  // Link component for navigation
import "@/app/components/navbar/page";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <ul className="nav-links">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">about</Link></li>
        <li><Link href="/skills">skills</Link></li>
        <li><Link href="/contact">contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#00adb5] text-white">
      <div className="text-2xl font-bold ml-8">My Portfolio</div>
      <ul className="flex list-none gap-10 mr-8">
        <li>
          <Link href="/" className="hover:text-blue-700 hover:underline transition duration-300 font-semibold">
            Home
          </Link>
        </li>
        <li>
          <Link href="/About" className="hover:text-blue-700 hover:underline transition duration-300 font-semibold">
            About
          </Link>
        </li>
        <li>
          <Link href="/Skills" className="hover:text-blue-700 hover:underline transition duration-300 font-semibold">
            Skills
          </Link>
        </li>
        <li>
          <Link href="/Contact" className="hover:text-blue-700 hover:underline transition duration-300 font-semibold">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

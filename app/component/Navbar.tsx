import React from 'react'
import { CiSearch } from "react-icons/ci";


const Navbar = () => {
  return (
    <div className=" h-16 flex p-4 text-[14px] mx-auto max-w-[1500px] items-center justify-between">
      <h2>Crypto University</h2>
      <div className="flex bg-[#E8EAED] rounded-full p-2 items-center">
        <CiSearch className="h-5 w-5" />
        <input className=" mx-auto max-w-[200px] bg-[#E8EAED]" type="text" />
      </div>
      <ul className="hidden md:flex gap-4">
        <li>Explore</li>
        <li>Blog</li>
        <li>Cohort Program</li>
      </ul>

      <div className="hidden md:flex gap-3">
        <article>EN</article>
        <article>EN</article>
        <article>EN</article>
      </div>
    </div>
  );
}

export default Navbar

import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Experiance",
    },
    {
      id: 4,
      text: "Projects",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto h-16 fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center md:px-20 px-4 py-4 bg-white border-b-2">
            <h1 className="text-slate-900 font-semibold text-4xl cursor-pointer">
              Suraj
            </h1>
         
          {/* desktop navbar */}
          <div>
            <ul className="hidden md:flex space-x-8 font-medium text-[18px]">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:text-slate-600 duration-200 cursor-pointer text-slate-950"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-[290px] pl-8 justify-center space-y-5 text-xl cursor-pointer absolute bg-white left-0 items-start w-full">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:text-slate-600 duration-200 font-semibold cursor-pointer text-slate-900"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;

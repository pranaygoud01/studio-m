import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
function Navbar() {
  const [open, setOpen] = useState(false);
  const Menus = [
    {
      id: "about",
      name: "About",
      path: "/about",
    },
    {
      id: "projects",
      name: "Projects",
      path: "/projects",
    },
    {
      id: "gallery",
      name: "Gallery",
      path: "/gallery",
    },
    {
      id: "Contact",
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="flex justify-center">
      <div className="absolute bg-transparent top-5  flex justify-between  max-w-[1250px] w-full">
        <div className="ml-20 max-lg:ml-8">
          <Link to="/" onClick={() => setOpen(false)}>
            <img
              src={logo}
              className="w-10 h-10  rounded-full object-cover border-2"
              alt="logo"
            />
          </Link>
        </div>
        <div className="bg-transparent max-lg:w-[30px] max-w-[400px] w-full mr-20 max-lg:mr-7">
          <ul className="flex justify-between text-sm  max-lg:hidden font-bold  pl-6 pr-6  shadow-md bg-[#ffffff] text-neutral-700  border-[1px] p-2 rounded-full">
            {Menus.map((menu) => (
              <Link key={menu.id} to={menu.path}>
                <li className="hover:text-red-500">{menu.name}</li>
              </Link>
            ))}
          </ul>
          <div className="lg:hidden text-3xl ">
            <HiOutlineMenuAlt3 onClick={() => setOpen(!open)} />
            {open && (
              <div className="lg:hidden absolute w-full h-[300px] left-0">
                <ul className="flex justify-between text-sm  font-bold bg-white rounded-xl border-2 m-5 flex-col">
                  {Menus.map((menu) => (
                    <Link
                      key={menu.id}
                      onClick={() => setOpen(false)}
                      to={menu.path}
                    >
                      <li className=" flex justify-center  pt-5 pb-5 items-center hover:text-red-500">
                        {menu.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

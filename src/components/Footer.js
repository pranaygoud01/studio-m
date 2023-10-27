import React from "react";
import { Link } from "react-router-dom";
function Footer() {
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
    <div className="flex justify-center bg-[#f2f2f2]">
      <div className="max-w-[1250px] bg-[#ffffff] max-lg:h-fit h-20 border-t-[1px] w-full flex justify-between max-lg:flex-col items-center">
        <div className="bg-transparent w-[50%] max-lg:w-full">
          <ul className="flex justify-between max-lg:ml-9 max-lg:mt-4  max-lg:w-10/12  text-sm w-[60%] ml-20 font-bold ">
            {Menus.map((menu) => (
              <Link key={menu.id} to={menu.path}>
                <li className="hover:text-red-500 text-[#3f3f40]">
                  {menu.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="text-xs text-[#6a6a72] mr-20 max-lg:text-center max-lg:mr-0 max-lg:mb-3 max-lg:mt-5">
          <p>
            &copy; 2023 StudioM.Created by{" "}
            <Link
              to="https://www.linkedin.com/in/pranaygoud1229/"
              target="blank"
              className="underline"
            >
              Pranay
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

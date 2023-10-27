import React from "react";
import logo from "../assets/logo.png";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the component (page) mounts.
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  }, []);
  return (
    <div className="flex justify-center bg-[#f2f2f2]">
      <div className="max-w-[1250px] bg-[#ffffff] h-fit w-full">
        <div className="m-20 p-12 pt-28 max-lg:m-4 max-lg:p-2 max-lg:mt-32">
          <p className="font-normal text-sm pl-1 text-neutral-500">
            Architect & Interior Designer's
          </p>
          <div className="flex">
            <h1 className="font-bold text-5xl mt-[.5rem] text-[#27272a]">
              Studio{" "}
            </h1>
            <img
              src={logo}
              className="w-[68px] h-[68px] rounded-full object-cover"
              alt="logo"
            />{" "}
          </div>
          <p className="text-[#6a6a72] max-lg:w-11/12 w-8/12 mt-3 text-justify max-lg:text-sm">
            I’m Mahender, An Architect and Urban Planner based in Hyderabad
            City. I’m the founder and CEO of Studio M, we are dedicated to
            designing innovative architectural solutions that empower
            individuals from all walks of life to experience and inhabit space
            on their own terms.
          </p>
          <div className="flex justify-between w-[100px] text-xl text-[#383839]  mt-6">
            <Link className="hover:text-red-500 hover:scale-105  duration-150">
              <BsLinkedin />
            </Link>
            <Link
              className="hover:text-red-500 hover:scale-105  duration-150"
              to="https://www.instagram.com/studio_m_architect/"
              target="blank"
            >
              {" "}
              <BsInstagram />
            </Link>
            <Link
              className="hover:text-red-500 hover:scale-105  duration-150"
              to="https://www.facebook.com/mysur.goud"
              target="blank"
            >
              {" "}
              <BsFacebook />
            </Link>
          </div>
        </div>
        <div className=" mb-20 mt-32 grid grid-cols-5 max-lg:grid-cols-2 gap-10">
          <img
            src="https://images.unsplash.com/photo-1522156373667-4c7234bbd804?auto=format&fit=crop&q=80&w=1966&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[350px] object-cover rounded-xl hover:scale-105  duration-300 rotate-[2deg] cursor-pointer "
            alt="img"
          />
          <img
            src="https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?auto=format&fit=crop&q=80&w=2020&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[350px] object-cover rounded-xl hover:scale-105  duration-300 rotate-[-2deg] cursor-pointer "
            alt="img"
          />
          <img
            src="https://images.unsplash.com/photo-1573384293689-0327bf65bd86?auto=format&fit=crop&q=80&w=1954&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[350px] object-cover rounded-xl hover:scale-105  duration-300 rotate-[2deg] cursor-pointer max-lg:hidden "
            alt="img"
          />
          <img
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[350px] object-cover rounded-xl hover:scale-105  duration-300 rotate-[-2deg] cursor-pointer  max-lg:hidden "
            alt="img"
          />
          <img
            src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="h-[350px] object-cover rounded-xl hover:scale-105  duration-300 rotate-[3deg] cursor-pointer  max-lg:hidden "
            alt="img"
          />
        </div>
        <div className="mt-20  mb-28 grid grid-cols-2 max-lg:grid-cols-1  gap-10">
          <div>
            <div className="ml-20 max-lg:m-2 p-10 hover:bg-[#fafafa] duration-200 cursor-pointer rounded-lg">
              <h1 className="font-semibold">Disciplined stock selection</h1>
              <p className="text-xs mt-2 text-[#525151]">
                We focus on high-yield assets with low-risk profiles, leveraging
                our disciplined approach and extensive market experience to
                accurately assess risk and acquire assets at optimal prices.
              </p>
            </div>
            <div className="ml-20  max-lg:m-2 p-10 mt-3 hover:bg-[#fafafa] duration-200 cursor-pointer rounded-lg">
              <h1 className="font-semibold">Active asset management</h1>
              <p className="text-xs mt-2 text-[#525151]">
                Through strategic asset management initiatives, we optimize and
                safeguard income returns. Adopting an active approach, we
                leverage our in-house expertise, market knowledge, and strong
                occupier relationships to drive success.
              </p>
            </div>
          </div>
          <div>
            <div className="mr-20 p-10  max-lg:m-2">
              <div className="flex">
                <IoMdMail className="mr-2 mt-1 " />
                <h1 className="font-semibold">Stay up to date</h1>
              </div>
              <p className="text-xs mt-2 text-[#525151]">
                Get notified when I publish something new, and unsubscribe at
                any time.
              </p>
              <input
                type="text"
                className="w-9/12 bg-transparent mt-4 pl-2 rounded-md text-xs pt-2 pb-2 border-[1px]"
                placeholder="Email"
              />
              <button className="p-2 pl-4 pr-4 ml-3 text-xs bg-black text-white font-bold rounded-md">
                Join
              </button>
            </div>
            <div className="mr-20 max-lg:m-2 p-10 mt-3 hover:bg-[#fafafa] duration-200 cursor-pointer rounded-lg">
              <h1 className="font-semibold">Profitable capital recycling</h1>
              <p className="text-xs mt-2 text-[#525151]">
                We consistently evaluate potential asset disposal opportunities
                to effectively reinvest capital into new ventures, leveraging
                our profitable track record in doing so.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

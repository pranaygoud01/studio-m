import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function Contact() {
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
        <div className="m-20 mb-2 p-12 mt-32 max-lg:p-10 max-lg:m-2 flex max-lg:flex-col ">
          <h1 className="font-bold text-7xl max-lg:text-2xl max-lg:mt-16 text-[#2a2a2d] max-lg:w-11/12 w-8/12">
            Let's start a project together
          </h1>
          <Link to="/">
            {" "}
            <img
              src={logo}
              className="w-[190px] max-lg:mt-10 max-lg:ml-2 max-lg:w-[100px] max-lg:h-[100px] rounded-full border-2 ml-32 h-[190px] object-cover "
              alt="logo"
            />
          </Link>
        </div>
        <div className="ml-20 max-lg:m-2 max-lg:pt-3 max-lg:w-11/12 pl-12 w-7/12 p-10">
          <h1 className="font-bold text-[#2a2a2d] max-lg:text-2xl text-4xl">
            Contact
          </h1>
          <form
            className="mt-7 flex flex-col "
            action="https://getform.io/f/717cf45e-9251-4e59-8b22-5ae810db1274"
            method="POST"
          >
            <input
              type="text"
              name="Name"
              className="p-3 border-b-[1px] border-[#dfdfdf]"
              placeholder="Name"
            />
            <input
              type="text"
              name="Email"
              className="p-3 mt-5  border-b-[1px] border-[#dfdfdf]"
              placeholder="Email"
            />
            <textarea
              name="meassge"
              className="border-[1px] p-2 mt-6 rounded-md"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className="text-sm pt-3 pb-3 bg-red-500 mt-6 rounded-md text-white font-bold">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function About() {
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
        <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:m-2 m-20 gap-10 p-12 max-lg:p-5 max-lg:pt-20 pt-24">
          <div className="pt-10">
            <h1 className="font-bold text-4xl text-[#27272a] max-lg:w-full w-11/12 max-lg:text-2xl">
              I’m Mahender, An Architect and Urban Planner based in Hyderabad
              City. I’m the founder and CEO of Studio M.
            </h1>
            <p className="w-11/12 max:lg:w-full mt-10 text-[#7d7d84] leading-7 text-sm font-[500] max-lg:text-sm max-lg:font-normal ">
              Studio M is a visionary architectural firm that redefines the
              boundaries of design, form, and function. With a commitment to
              innovation, creativity, and sustainable practices, StudioM stands
              at the forefront of architectural excellence. Our mission is to
              transform spaces into works of art that inspire, enhance
              well-being, and create enduring value for our clients and the
              communities they serve.
              <br />
              <br />
              Design Excellence: StudioM is dedicated to pushing the envelope of
              design, constantly seeking new ways to fuse aesthetics and
              functionality. Our architects are passionate about crafting
              unique, distinctive spaces that make a lasting impression.
              <br />
              <br />
              Sustainability: At StudioM, we believe in responsible
              architecture. We are committed to sustainable building practices,
              incorporating eco-friendly materials and technologies into our
              projects to reduce our ecological footprint. Client-Centric: We
              understand that every project is unique, and we work closely with
              our clients to bring their visions to life. StudioM listens,
              collaborates, and delivers architectural solutions that exceed
              expectations.
            </p>
          </div>
          <div>
            <img
              src="https://th.bing.com/th/id/OIG.3xz9ZjKU6cptVq2JKOyL?pid=ImgGn&w=1024&h=1024&rs=1"
              className="w-11/12 h-[450px] rounded-xl shadow-xl rotate-6 object-cover max-lg:h-[250px] max-lg:rotate-3"
              alt="img"
            />
            <div className="mt-20 pb-8 border-b-[1px]">
              <Link
                to="https://www.instagram.com/studio_m_architect/"
                target="blank"
                className="flex hover:text-red-500   text-[#71717a] duration-200"
              >
                <BsInstagram className="mr-4 mt-1 text-lg" />
                <h1 className="font-semibold text-md ">Follow on Instagram</h1>
              </Link>
              <div className="flex hover:text-red-500  mt-3 text-[#71717a] duration-200">
                <BsLinkedin className="mr-4 mt-1 text-lg" />
                <h1 className="font-semibold text-md ">Follow on LinkedIn</h1>
              </div>
              <div className="flex hover:text-red-500  mt-3 text-[#71717a] duration-200">
                <BsGithub className="mr-4 mt-1 text-lg" />
                <h1 className="font-semibold text-md ">+91 9160408508</h1>
              </div>
              <Link
                to="https://www.facebook.com/mysur.goud"
                target="_blank"
                className="flex hover:text-red-500  mt-3 text-[#71717a] duration-200"
              >
                <BsFacebook className="mr-4 mt-1 text-lg" />
                <h1 className="font-semibold text-md ">Follow on Facebook</h1>
              </Link>
            </div>
            <Link
              to="mailto:mahendersunkari5@gmail.com"
              className="text-[#71717a] flex mt-10 hover:text-red-500"
            >
              <IoMdMail className="mt-1 mr-2 text-lg" />
              <h1 className="font-semibold ">mahendersunkari5@gmail.com</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

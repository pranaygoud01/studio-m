import React, { useEffect } from "react";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
function Projects() {
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
        <div className="m-20 p-12 mb-10 max-lg:p-2 max-lg:m-6 max-lg:pt-20 max-lg:mt-10 pt-20">
          <h1 className="font-bold text-5xl max-lg:w-11/12 text-[#2a2a2d]  max-lg:text-4xl w-8/12">
            Things I’ve made trying to put my dent in the universe.
          </h1>
          <p className="mt-7 w-8/12 max-lg:w-11/12 text-[#76767a]">
            I’ve worked on tons of little projects over the years but these are
            the ones that I’m most proud of. Many of them are open-source, so if
            you see something that piques your interest,Here some of my
            projects.
          </p>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-1 max-lg:mr-2 max-lg:ml-2 ml-10 mr-10 mb-10">
          <div className=" hover:bg-[#fafafa] rounded-xl p-8">
            <img
              src={project1}
              className="h-[300px] rounded-lg object-cover hover:scale-105 duration-300"
              alt="prj"
            />
            <div className="p-2">
              <h1 className="font-bold text-base">Interior</h1>
              <p className="text-xs text-[#76767a]">Duplex</p>
            </div>
          </div>
          <div className=" hover:bg-[#fafafa] rounded-xl p-8">
            <img
              src={project2}
              className="h-[300px] rounded-lg object-cover hover:scale-105 duration-300"
              alt="prj"
            />
            <div className="p-2">
              <h1 className="font-bold text-base">Exterior</h1>
              <p className="text-xs text-[#76767a]">Duplex</p>
            </div>
          </div>
          <div className=" hover:bg-[#fafafa] rounded-xl p-8">
            <img
              src={project3}
              className="h-[300px] rounded-lg object-cover hover:scale-105 duration-300"
              alt="prj"
            />
            <div className="p-2">
              <h1 className="font-bold text-base">Exterior</h1>
              <p className="text-xs text-[#76767a]">Duplex</p>
            </div>
          </div>
          <div className=" hover:bg-[#fafafa] rounded-xl p-8">
            <img
              src={project4}
              className="h-[300px] rounded-lg object-cover hover:scale-105 duration-300"
              alt="prj"
            />
            <div className="p-2">
              <h1 className="font-bold text-base">Kitchen</h1>
              <p className="text-xs text-[#76767a]">Dinning hall</p>
            </div>
          </div>
          <div className=" hover:bg-[#fafafa] rounded-xl p-8">
            <img
              src={project5}
              className="h-[300px] rounded-lg object-cover hover:scale-105 duration-300"
              alt="prj"
            />
            <div className="p-2">
              <h1 className="font-bold text-base">Hall</h1>
              <p className="text-xs text-[#76767a]">Duplex</p>
            </div>
          </div>
          <div className=" hover:bg-[#fafafa] rounded-xl p-8">
            <img
              src={project6}
              className="h-[300px] rounded-lg object-cover hover:scale-105 duration-300"
              alt="prj"
            />
            <div className="p-2">
              <h1 className="font-bold text-base">Exterior</h1>
              <p className="text-xs text-[#76767a]">Complex</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

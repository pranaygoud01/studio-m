import React, { useEffect } from "react";

function Gallery() {
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
        <div className="m-20 mb-10 pb-2 p-12 pt-20 max-lg:m-2 ">
          <h1 className="font-bold max-lg:text-2xl max-lg:mt-10 max-lg:w-11/12 text-[#2a2a2d]  text-4xl leading-10 w-8/12">
            Hello! Welcome to Studio M Design's Gallery with Creative and Unique
            Design's
          </h1>
          <p className="w-8/12 max-lg:text-sm max-lg:w-11/12 text-[#7e7e85] mt-4">
            Step into the captivating world of architectural innovation as our
            gallery showcases breathtaking designs that blend form and function
            in perfect harmony.
          </p>
        </div>
        <div className="flex m-20 max-lg:m-5">
          <div className="w-3/12 mr-3 max-lg:w-6/12">
            <img
              src="https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="prj1"
              className="rounded-md h-[600px] object-cover max-lg:h-[400px]"
            />
            <div>
              <img
                src="https://images.unsplash.com/photo-1540730930991-a9286a5f5020?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                className="h-[200px] mt-4 w-full rounded-md object-cover lg:hidden"
              />
            </div>
          </div>

          <div className="w-6/12">
            <img
              src="https://images.unsplash.com/photo-1632583824020-937ae9564495?auto=format&fit=crop&q=80&w=2158&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="prj2"
              className="h-[300px] max-lg:h-[200px] object-cover w-full rounded-md"
            />
            <div className="grid grid-cols-2 gap-2 max-lg:grid-cols-1">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className=" mt-3 h-[285px] rounded-md object-cover max-lg:h-[200px]"
                  alt="prj4"
                />
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className=" mt-3 h-[285px] rounded-md object-cover  max-lg:h-[200px]"
                  alt="prj4"
                />
              </div>
            </div>
          </div>
          <div className="w-3/12 max-lg:hidden">
            <img
              src="https://images.unsplash.com/photo-1628797285815-453c1d0d21e3?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="prj3"
              className="h-[300px] w-full ml-3 rounded-md object-cover"
            />
            <div>
              <img
                src="https://images.unsplash.com/photo-1508402221264-0cabdb0408d3?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                className="h-[285px] mt-3 rounded-md w-full object-cover ml-3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

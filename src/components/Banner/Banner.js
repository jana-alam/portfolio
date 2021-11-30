import React from "react";
import banner from "../../image/banner.png";

const Banner = () => {
  return (
    <section id="home">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="text-center space-y-4 mt-4 sm:mt-0 px-8">
          <h1 className="text-2xl">
            Myself <br />
            <span className="text-5xl">Jana Alam</span>
          </h1>
          <p className="text-3xl">MERN Stack Developer</p>
          <p>
            I have Strong knowledge in MERN Stack with experience in building
            Web Applications by using React.js for client side, Node.js/Express
            for server side and MongoDB for database.
          </p>
          <a
            href="https://drive.google.com/file/d/1n9FmPInyhZA2y847EJlWTMgLcT3ZvX4b/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-indigo-500 text-white border-0 rounded-md inline-block"
          >
            Download Resume
          </a>
        </div>
        <div>
          <img src={banner} alt="banner" className=" min-w-full" />
        </div>
      </div>
    </section>
  );
};

export default Banner;

import React from "react";
import ReactTyped from "react-typed";

const Banner = () => {
  return (
    <section
      id="home"
      className="py-24 sm:py-44"
      style={{
        backgroundImage: "url('https://i.ibb.co/h1TBywq/banner-img.jpg')",
        backgroundColor: "black",
        backgroundBlendMode: "normal",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
        <div className="text-center space-y-4 mt-4 sm:mt-0 px-8">
          <h1 className="text-2xl text-white">
            Myself <br />
            <span className="text-5xl font-bold">Jana Alam</span>
          </h1>
          <ReactTyped
            className="text-3xl text-yellow-500"
            strings={[
              "Mern Stack Developer",
              "Web Developer",
              "Front End Developer",
            ]}
            typeSpeed={60}
            backSpeed={20}
            loop
          />
          <p className="text-white text-lg font-bold">
            I have Strong knowledge in MERN Stack with experience in building
            Web Applications by using React.js for client side, Node.js/Express
            for server side and MongoDB for database.
          </p>
          <a
            href="https://drive.google.com/file/d/1n9FmPInyhZA2y847EJlWTMgLcT3ZvX4b/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-red-600 text-white border-0 rounded-md inline-block"
          >
            Download Resume
          </a>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Banner;

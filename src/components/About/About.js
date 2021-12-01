import React from "react";
import image from "../../image/jana-alam.jpeg";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const About = () => {
  return (
    <section
      className="py-14 bg-gradient-to-r from-purple-900 to-purple-400"
      id="about"
    >
      <h1 className="text-center text-4xl font-bold text-white">About Me</h1>
      <div className="sm:w-10/12 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-center mt-12 justify-center">
        <div className="px-4 sm:px-12 space-y-3 mt-6 text-justify text-white">
          <Fade>
            <p>
              I am Md Jana Alam, lives in Dhaka,Bangladesh who loves to do
              coding. At the begining of my programming carrier i learned
              wordpress customization and then moved to theme development. But I
              found my-self more comfortable with coding rather than to do just
              customization on wordpress.
            </p>

            <p>
              From that interest, i started to learn PHP by myself from open
              source and developed a purchase tracking system for Akij Shipping
              Line. After that i enrolled at Programming hero for Complete Web
              Developer course to make my base stronger on javascript.{" "}
            </p>

            <p>
              Finally, by the grace of almighty i have completed my course as
              MERN stack developer and developed more than 3 projects on React &
              Node. My dream is to become a software engineer and will
              accomplish one day.
            </p>
          </Fade>
        </div>
        <Zoom>
          <div>
            <img
              src={image}
              alt="myImage"
              className="w-10/12 mx-auto rounded-lg"
            />
          </div>
        </Zoom>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import scooty from "../../image/scooty.png";
import sailout from "../../image/sailout.png";
import healthcare from "../../image/healthcare.png";

const Project = () => {
  return (
    <section id="projects" className=" bg-gray-100 py-20 px-12">
      <h1 className="text-5xl font-semibold text-center m-0">My Projects</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-3 gap-8 mt-12 items-stretch">
        <div className="text-center">
          <img src={scooty} alt="scooty" />
          <h4 className="text-3xl font-bold my-2">Scooty Shop</h4>
          <p className="text-gray-800">
            Single Product Based e-commerce site with authentication system for
            user & admin. User & Admin both can manage their dashboard as per
            role.Responsiveness with Mobile & Desktop. Technology: React,
            Firebase, Tailwind, Node, Mongo DB, Express, JS, HTML, CSS
          </p>
          <a
            href="https://scooty-best.web.app/"
            className="no-underline inline-block px-2 py-2 bg-indigo-200 text-indigo-800 rounded-3xl mt-4"
          >
            Live Site
          </a>
        </div>
        <div className="text-center">
          <img src={sailout} alt="scooty" />
          <h4 className="text-3xl font-bold my-2">Sailout Travel Agency</h4>
          <p className="text-gray-800">
            Travel Agency website for user to book & manage their tours. Uses
            firebase authentication for login with Gmail Single Page
            Application. Technology used: React, Firebase, Tailwind, Node, Mongo
            DB, Express, JS, HTML, CSS
          </p>
          <a
            href="sailout.web.app"
            className="no-underline inline-block px-2 py-2 bg-indigo-200 text-indigo-800 rounded-3xl mt-4"
          >
            Live Site
          </a>
        </div>
        <div className="text-center">
          <img src={healthcare} alt="scooty" />
          <h4 className="text-3xl font-bold my-2">Healthcare Hospotal</h4>
          <p className="text-gray-800">
            Healthcare website for providing various medical treatment. Uses
            firebase authentication for login / register. Patient/user can book
            for doctor appointment. Technology used: React, Firebase, Tailwind,
            JS, HTML, CSS
          </p>
          <a
            href="https://scooty-best.web.app/"
            className="no-underline inline-block px-2 py-2 bg-indigo-200 text-indigo-800 rounded-3xl mt-4"
          >
            Live Site
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;

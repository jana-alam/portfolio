import React from "react";
import Bounce from "react-reveal/Bounce";
import useProjects from "../../hooks/useProjects";

const Projects = () => {
  const { myProject } = useProjects();
  const handleModel = (title) => {
    console.log(title);
  };
  return (
    <section id="projects" className=" bg-gray-100 py-20 px-12">
      <h1 className="text-5xl font-semibold text-center m-0">My Projects</h1>
      <div className="grid  grid-cols-1 sm:grid-cols-3 gap-8 mt-12 items-stretch">
        {myProject.map((work) => (
          <div key={work.id}>
            <div className="text-center">
              <Bounce>
                <img src={work.img} alt={work.title} />
              </Bounce>

              <h4 className="text-3xl font-bold my-2">{work.title}</h4>
              <p className="text-gray-800">{work.description}</p>

              <button
                onClick={() => handleModel(work.title)}
                className="no-underline inline-block px-2 py-2 bg-indigo-200 text-indigo-800 rounded-3xl mt-4"
              >
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

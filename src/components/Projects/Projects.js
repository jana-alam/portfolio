import React, { useState } from "react";
import Bounce from "react-reveal/Bounce";
import useProjects from "../../hooks/useProjects";
import MyModal from "../MyModal/MyModal";

const Projects = () => {
  const { myProject } = useProjects();
  const [isOpen, setIsOpen] = useState(false);
  const [projectId, setProjectId] = useState(null);
  const handleModalOpen = (n) => {
    setIsOpen(true);
    setProjectId(n);
  };

  return (
    <section id="projects" className=" bg-gray-100 py-20 px-12">
      <h1 className="text-5xl font-semibold text-center m-0 text-purple-600">
        My Projects
      </h1>
      <div className="grid  grid-cols-1 sm:grid-cols-3 gap-8 mt-12 items-stretch">
        {myProject.map((singleProject) => (
          <div key={singleProject.id}>
            <div className="text-center">
              <Bounce>
                <img src={singleProject.img} alt={singleProject.title} />
              </Bounce>

              <h4 className="text-3xl font-bold my-2">{singleProject.title}</h4>
              <p className="text-gray-800">{singleProject.description}</p>

              <button
                onClick={() => handleModalOpen(singleProject.id)}
                className="no-underline inline-block px-4 py-2 bg-purple-300 text-purple-900 rounded-lg mt-4"
              >
                Details
              </button>
            </div>
          </div>
        ))}
        <MyModal projectId={projectId} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </section>
  );
};

export default Projects;

import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import useProjects from "../../hooks/useProjects";
import "./MyModal.css";
ReactModal.setAppElement("#root");

const MyModal = ({ isOpen, setIsOpen, projectId }) => {
  const { myProject } = useProjects();
  const [projectDetails, setProjectDetails] = useState({});

  useEffect(() => {
    const filtered = myProject.filter((sProject) => sProject.id === projectId);
    setProjectDetails(filtered[0]);
  }, [myProject, projectId]);

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <ReactModal isOpen={isOpen} onRequestClose={handleModalClose}>
        {projectDetails?.title && (
          <div className="w-10/12 mx-auto">
            <h1 className="text-3xl text-center text-indigo-700 font-bold mb-6">
              {projectDetails?.title}
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 mb-4">
              <img
                src={projectDetails?.img1}
                alt=""
                className="border-2 border-indigo-700 rounded-2xl"
              />
              <img
                src={projectDetails?.img2}
                alt=""
                className="border-2 border-indigo-700 rounded-2xl"
              />
            </div>

            <p className="text-lg font-medium mb-4">
              {projectDetails?.description}
            </p>
            <ul>
              <li className="list-disc ml-8">
                {projectDetails?.bulletPoint[1]}
              </li>
              <li className="list-disc ml-8">
                {projectDetails?.bulletPoint[2]}
              </li>
              <li className="list-disc ml-8">
                {projectDetails?.bulletPoint[0]}
              </li>
            </ul>
            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-12 my-4">
              <img
                src={projectDetails.img3}
                alt=""
                className="border-2 border-indigo-700 rounded-2xl"
              />
              <div>
                <h4 className="font-bold text-lg text-center">
                  Technology Used
                </h4>
                <p className="text-center my-4">
                  {projectDetails?.technology.map((tech) => (
                    <span
                      className="m-2 bg-red-200 text-red-600 px-2 rounded-lg inline-block"
                      key={tech}
                    >
                      {tech}
                    </span>
                  ))}
                </p>
                <div className="flex justify-between">
                  <a
                    href={projectDetails?.liveSite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-100 text-green-600 font-bold"
                  >
                    Live Link
                  </a>
                  <button
                    onClick={handleModalClose}
                    className="px-4 py-2 bg-red-100 text-red-600 font-bold"
                  >
                    Close
                  </button>
                  <a
                    href={projectDetails?.gitLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-100 text-purple-600 font-bold"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </ReactModal>
    </div>
  );
};

export default MyModal;

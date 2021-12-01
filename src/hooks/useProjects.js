import { useEffect, useState } from "react";

const useProjects = () => {
  const [myProject, setMyProject] = useState([]);

  useEffect(() => {
    fetch("/projectsData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("From", data);
        setMyProject(data);
      });
  }, []);
  return { myProject };
};

export default useProjects;

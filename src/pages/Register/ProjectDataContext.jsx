// import React, { createContext, useContext, useState } from 'react';

// const ProjectDataContext = createContext();

// export const ProjectDataProvider = ({ children }) => {
//   const [projectData, setProjectData] = useState([]);

//   const addProjectData = (data) => {
//     setProjectData([...projectData, data]);
//   };

//   return (
//     <ProjectDataContext.Provider value={{ projectData, addProjectData }}>
//       {children}
//     </ProjectDataContext.Provider>
//   );
// };

// export const useProjectData = () => useContext(ProjectDataContext);
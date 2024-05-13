// import React, { createContext, useContext, useState } from 'react';

// const TeamLeadDataContext = createContext();

// export const TeamLeadDataProvider = ({ children }) => {
//   const [teamLeadData, setTeamLeadData] = useState([]);

//   const addTeamLeadData = (data) => {
//     setTeamLeadData([...teamLeadData, data]);
//   };

//   return (
//     <TeamLeadDataContext.Provider value={{ teamLeadData, addTeamLeadData }}>
//       {children}
//     </TeamLeadDataContext.Provider>
//   );
// };

// export const useTeamLeadData = () => {
//   return useContext(TeamLeadDataContext);
// };

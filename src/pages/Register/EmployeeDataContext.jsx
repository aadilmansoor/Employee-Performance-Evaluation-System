
import React, { createContext, useContext, useState } from 'react';

const EmployeeDataContext = createContext();

export const useEmployeeData = () => useContext(EmployeeDataContext);

export const EmployeeDataProvider = ({ children }) => {
  const [employeeData, setEmployeeData] = useState([]);

  const addEmployeeData = (employee) => {
    setEmployeeData([...employeeData, employee]);
  };

  return (
    <EmployeeDataContext.Provider value={{ employeeData, addEmployeeData }}>
      {children}
    </EmployeeDataContext.Provider>
  );
};

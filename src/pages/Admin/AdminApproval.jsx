import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ApprovalTable from "../../components/ApprovalTable";
import ApprovalTableTrainee from "../../components/ApprovalTableTrainee";
import axios from "axios";
import {
  getManagersForApprovalAPI,
  getTeamLeadsForApprovalAPI,
  getTraineesForApprovalAPI,
} from "../../Services/allAPI";

function CustomTabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

  const getManagerList = async () => {
    const token = localStorage.getItem("adminToken");

    const result = await getManagersForApprovalAPI(token);
    console.log(result);
  };

  const getTeamLeadList = async () => {
    const token = localStorage.getItem("adminToken");

    const result = await getTeamLeadsForApprovalAPI(token);
    console.log(result);
  };

  const getTraineeList = async () => {
    const token = localStorage.getItem("adminToken");

    const result = await getTraineesForApprovalAPI(token);
    console.log(result);
  };

  useEffect(() => {
    getManagerList();
    getTeamLeadList();
    getTraineeList();
  }, []);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AdminApproval = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Manager" {...a11yProps(0)} />
          <Tab label="Team Lead" {...a11yProps(1)} />
          <Tab label="Trainee" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <ApprovalTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ApprovalTable />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ApprovalTableTrainee />
      </CustomTabPanel>
    </Box>
  );
};

export default AdminApproval;

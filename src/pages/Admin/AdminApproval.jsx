import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ApprovalTable from "../../components/ApprovalTable";
import ApprovalTableTrainee from "../../components/ApprovalTableTrainee";
import {
  getManagersForApprovalAPI,
  getTeamLeadsForApprovalAPI,
  getTraineesForApprovalAPI,
} from "../../Services/allAPI";

function CustomTabPanel(props) {
  // eslint-disable-next-line react/prop-types
  const { children, value, index, ...other } = props;

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

const token = localStorage.getItem("adminToken");

const AdminApproval = () => {
  const [managerList, setManagerList] = useState([]);
  const [teamLeadList, setTeamLeadList] = useState([]);
  const [traineeList, setTraineeList] = useState([]);

  const getManagerList = async () => {
    const result = await getManagersForApprovalAPI(token);
    if (result.status === 200) {
      setManagerList(result.data);
    }
  };

  const getTeamLeadList = async () => {
    const result = await getTeamLeadsForApprovalAPI(token);
    if (result.status === 200) {
      setTeamLeadList(result.data);
    }
  };

  const getTraineeList = async () => {
    const result = await getTraineesForApprovalAPI(token);
    if (result.status === 200) {
      setTraineeList(result.data);
    }
  };

  useEffect(() => {
    getManagerList();
    getTeamLeadList();
    getTraineeList();
  }, []);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="wrapper">
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
          <ApprovalTable data={managerList} getManagerList={getManagerList} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ApprovalTable
            data={teamLeadList}
            getTeamLeadList={getTeamLeadList}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ApprovalTableTrainee
            data={traineeList}
            getTraineeList={getTraineeList}
          />
        </CustomTabPanel>
      </Box>
    </div>
  );
};

export default AdminApproval;

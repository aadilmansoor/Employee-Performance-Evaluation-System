import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from "@mui/material";
import PropTypes from "prop-types";
import { approveManagerAPI, approveTeamLeadAPI } from "../Services/allAPI";
import Swal from "sweetalert2";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ApprovalTable = ({ data, getManagerList, getTeamLeadList }) => {
  console.log({ getTeamLeadList });
  const handleAccept = async (id, user) => {
    const token = localStorage.getItem("adminToken");
    if (user === "hr") {
      const result = await approveManagerAPI(id, token);
      console.log(result);
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Approved",
          text: "You have successfully approved the manager",
        });
        getManagerList();
      }
    } else if (user === "teamlead") {
      const result = await approveTeamLeadAPI(id, token);
      console.log(result);
      if (result.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Approved",
          text: "You have successfully approved the team lead.",
        });
        getTeamLeadList();
      }
    }
  };

  return (
    <div>
      {data?.length === 0 ? (
        <p className="mt-6 text-center">No request Available</p>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Full Name</StyledTableCell>
                <StyledTableCell align="right">Email address</StyledTableCell>
                <StyledTableCell align="right">Phone Number</StyledTableCell>
                <StyledTableCell align="right">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                return (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.email_address}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="h-full">
                      {row.phoneno}
                    </StyledTableCell>
                    <StyledTableCell align="right" className="h-full">
                      <Button
                        size="small"
                        variant="contained"
                        color="success"
                        onClick={() => handleAccept(row.id, row.user_type)}
                      >
                        Approve
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

ApprovalTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      email_address: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      is_adminapproved: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      phoneno: PropTypes.number.isRequired,
      user_type: PropTypes.string.isRequired,
    })
  ).isRequired,
  getManagerList: PropTypes.func,
  getTeamLeadList: PropTypes.func,
};

export default ApprovalTable;

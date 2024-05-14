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

const ApprovalTable = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Full Name</StyledTableCell>
              <StyledTableCell align="right">Username</StyledTableCell>
              <StyledTableCell align="right">Email address</StyledTableCell>
              <StyledTableCell align="right">Phone Number</StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Fawas
              </StyledTableCell>
              <StyledTableCell align="right">Fawas</StyledTableCell>
              <StyledTableCell align="right">azxaz@gmail.com</StyledTableCell>
              <StyledTableCell align="right" className="h-full">
                123456789
              </StyledTableCell>
              <StyledTableCell align="right" className="h-full">
                <div className="flex gap-4 justify-end">
                  <Button size="small" variant="contained" color="success">
                    Success
                  </Button>
                  <Button size="small" variant="outlined" color="error">
                    Error
                  </Button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ApprovalTable;

import {
    Box,
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useState } from "react";

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const ApprovalTable = () => {
    const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
      
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
                  <Button  size="small" variant="contained" color="success">
                    Accept
                  </Button>
                  <Button onClick={handleOpen} size="small" variant="outlined" color="error">
                    Reject
                  </Button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography   id="modal-modal-title" variant="h6" component="h2">
            <p className="text-center">Are you sure you want to reject?</p>
          </Typography>
          <div className="flex gap-4 justify-center mt-6">
                  <Button  size="small" variant="contained" color="success">
                    Accept
                  </Button>
                  <Button onClick={handleClose} size="small" variant="outlined" color="error">
                    Reject
                  </Button>
                </div>
        </Box>
      </Modal>
    </div>
  );
};

export default ApprovalTable;

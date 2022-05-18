import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FetchRecordModal from "./Modal";

function FormData({ tableRecord }) {
  const [open, setOpen] = React.useState(false);
  const [singleRecord, setSingleRecord] = React.useState({});
  const sendRecord = (e, recordId) => {
    e.preventDefault();
    setOpen(true);
    const fullInformation = tableRecord.filter((data) => data.id === recordId);
    const newData=fullInformation.pop();
    console.log(newData)
    setSingleRecord(newData);
  };
  const CloseModalHandler = (e, data) => {
    console.log(data, e);
    setOpen(data);
  };
  return (
    <>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>FirstName</TableCell>
            <TableCell align="right">LastName</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Occupation</TableCell>
            <TableCell align="right">City</TableCell>
            <TableCell align="right">Bio</TableCell>
            <TableCell align="right">Qualification</TableCell>
            <TableCell align="right">University</TableCell>
            <TableCell align="right">Year</TableCell>
            <TableCell align="right">Hobby</TableCell>
            <TableCell align="right">ContactNumber</TableCell>
            <TableCell align="right">address</TableCell>
            <TableCell align="right">Send Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRecord.map((row) => (
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell component="th" scope="row">
                {row.lastName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.occupation}</TableCell>
              <TableCell align="right">{row.city}</TableCell>
              <TableCell align="right">{row.bio}</TableCell>
              <TableCell align="right">{row.qualification}</TableCell>
              <TableCell align="right">{row.university}</TableCell>
              <TableCell align="right">{row.year}</TableCell>
              <TableCell align="right">{row.hobby}</TableCell>
              <TableCell align="right">{row.contactnumber}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
              <TableCell align="right">
                <button
                  onClick={(e) => {
                    sendRecord(e, row.id);
                  }}
                >
                  Click me
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <FetchRecordModal
        modalopen={open}
        handleClose={CloseModalHandler}
        singleRecord={singleRecord}
      />
    </>
  );
}

export default FormData;

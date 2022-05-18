import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import { Email } from "@mui/icons-material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function FetchRecordModal({
  modalopen,
  handleClose,
  singleRecord,
}) {
  console.log("singleRecord", singleRecord);
  return (
    <div>
      <BootstrapDialog
        onClose={(e) => {
          handleClose(e, false);
        }}
        aria-labelledby="customized-dialog-title"
        open={modalopen}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={(e) => handleClose(e, false)}
        >
          Single Record
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom></Typography>
          <h1>Single Record Data</h1>

          {singleRecord.firstName ? (
            <Typography gutterBottom>
              Firstname:{singleRecord.firstName}
            </Typography>
          ) : null}
          {singleRecord.lastName ? (
            <Typography gutterBottom>
              Lastname:{singleRecord.lastName}
            </Typography>
          ) : null}
          {singleRecord.Email ? (
            <Typography gutterBottom>Email:{singleRecord.Email}</Typography>
          ) : null}
          {singleRecord.qualification ? (
            <Typography gutterBottom>
              Qualification:{singleRecord.qualification}
            </Typography>
          ) : null}
          {singleRecord.hobby ? (
            <Typography gutterBottom>hobby:{singleRecord.hobby}</Typography>
          ) : null}
          {singleRecord.university ? (
            <Typography gutterBottom>
              university:{singleRecord.university}
            </Typography>
          ) : null}
          {singleRecord.year ? (
            <Typography gutterBottom>year:{singleRecord.year}</Typography>
          ) : null}
          {singleRecord.bio ? (
            <Typography gutterBottom>bio:{singleRecord.bio}</Typography>
          ) : null}
          {singleRecord.address ? (
            <Typography gutterBottom>address:{singleRecord.address}</Typography>
          ) : null}
          {singleRecord.contactnumber ? (
            <Typography gutterBottom>
              contactnumber:{singleRecord.contactnumber}
            </Typography>
          ) : null}
          <br/>
        <TextField
          id="standard-multiline-static"
          label="Send Email"
          multiline
          rows={4}
          placeholder="You can send that data to your specific email"
          variant="standard"
        />
        </DialogContent>
        
        <DialogActions>
          <Button autoFocus onClick={(e) => handleClose(e, false)}>
            Submit Record
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

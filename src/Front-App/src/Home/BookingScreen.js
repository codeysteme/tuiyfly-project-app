import * as React from "react";
import * as yup from "yup";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useStyles } from "./style";
import AppInputField from "../Components/AppInputField";
import AppForm from "../Components/AppForm";
import { Alert, InputAdornment } from "@mui/material";
import GroupIcon from "@mui/icons-material/Group";
import { Email, PhoneLocked } from "@mui/icons-material";
import { isEmpty } from "ramda";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const InitialBookingForm = {
  userName: "",
  email: "",
  phone: "",
};
const validationSchema = yup.object().shape({
  userName: yup.string().min(3, "Nom & prénom incorrect").required(),
  email: yup.string().email("Must be a valid email").max(255).required("Adresse email incorrect"),
  phone: yup.string().min(8).max(15).required("Téléphone incorrect"),
});

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
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
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function BookingScreen({ open, hanldeOpen, flight, handleSubmit, bookingResult }) {
  const classes = useStyles();
  const flightCountries = `${flight.departure.departureAirport.name} - ${flight.departure.arrivalAirport.name}`;
  const flightId = `${flight.departure.departureAirport.id}-${flight.departure.arrivalAirport.id}`;

  return (
    <BootstrapDialog onClose={hanldeOpen} aria-labelledby="customized-dialog-title" open={open}>
      <BootstrapDialogTitle id="customized-dialog-title" onClose={hanldeOpen}>
        <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "280px" }}>
          <Typography component="div" variant="h5" sx={{ fontSize: "13px", color: "#4C4C4C" }}>
            Réserver le vol :
          </Typography>
          <Typography component="div" variant="h5" sx={{ fontSize: "13px", fontWeight: "550", color: "#4C4C4C" }}>
            {flightCountries}
          </Typography>
        </Box>
      </BootstrapDialogTitle>
      {!isEmpty(bookingResult) && (
        <Alert severity={bookingResult.status >= 400 ? "error" : "success"}>{bookingResult.msg}</Alert>
      )}
      <AppForm
        initialValues={InitialBookingForm}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          values.phone = values.phone.toString();
          const body = { flightId, ...values };
          handleSubmit(body, actions);
        }}
      >
        <DialogContent dividers>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <AppInputField
              labelName="Nom et prénom"
              name="userName"
              placeholder="clerc nicephore"
              InputProps={{
                style: { fontSize: "13px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <GroupIcon />
                  </InputAdornment>
                ),
              }}
            />
            <AppInputField
              labelName="Adresse e-mail"
              name="email"
              placeholder="nkounkounicephore@gmail.com"
              type={"email"}
              InputProps={{
                style: { fontSize: "13px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <Email />
                  </InputAdornment>
                ),
              }}
            />
            <AppInputField
              labelName="Numéro de téléphone"
              name="phone"
              type={"number"}
              placeholder="0613767995"
              InputProps={{
                inputMode: "numeric",
                style: { fontSize: "13px" },
                startAdornment: (
                  <InputAdornment position="start">
                    <PhoneLocked />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" className={classes.buttonBooking}>
            Réserver
          </Button>
        </DialogActions>
      </AppForm>
    </BootstrapDialog>
  );
}

import * as yup from "yup";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import AppCalendar from "../Components/AppCalendar";
import AppForm from "../Components/AppForm";
import { useStyles } from "./style";
import AirportSelect from "../Components/AirportSelect";
import AppInputField from "../Components/AppInputField";

const InitialSearchFlightsFilter = {
  departure: "",
  arrival: "",
  departureDate: null,
  returnDate: null,
  passengerNumbers: 1,
  pageIndex: 1,
};

const validationSchema = yup.object().shape({
  departure: yup
    .string()
    .min(3, "Ville de départ incorrect")
    .max(3, "Ville de départ incorrect")
    .required("Sélectionnez une ville de départ")
    .nullable(),
  arrival: yup
    .string()
    .min(3, "Ville d'arrivée incorrect")
    .max(3, "Ville d'arrivée incorrect")
    .required("Sélectionnez une ville d'arrivée")
    .nullable(),
  departureDate: yup.string().required("Date de départ incorrect"),
  returnDate: yup.string().required("Date de retour incorrect"),
  passengerNumbers: yup.number().required("Nombre de passager(s) incorrect"),
});

export default function SearchFlightsFilter({ airports, handleFilterSubmit }) {
  const classes = useStyles();

  return (
    <Box className={classes.searchBlock}>
      <AppForm
        initialValues={InitialSearchFlightsFilter}
        validationSchema={validationSchema}
        onSubmit={handleFilterSubmit}
      >
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <AirportSelect
            labelName="Ville de départ"
            name="departure"
            mention="Sélectionnez un aéroport"
            noOptionText="Aucune ville de départ trouvé."
            airports={airports}
          />
          <AirportSelect
            labelName="Ville d'arrivée"
            name="arrival"
            mention="Sélectionnez une destination"
            noOptionText="Aucune ville d'arrivée trouvé."
            airports={airports}
          />
          <AppCalendar labelName="Date de départ" name="departureDate" />
          <AppCalendar labelName="Date de retour" name="returnDate" />
          <AppInputField labelName="Nombre de passager(s)" name="passengerNumbers" placeHolder="Voyageur(s)" />
          <Button
            type="submit"
            variant="filled"
            style={{
              backgroundColor: "#09295D",
              color: "#fff",
              fontWeight: "bold",
              textTransform: "none",
            }}
          >
            Chercher
          </Button>
        </Box>
      </AppForm>
      <Box>
        <Button className={classes.cleanFilterButton} variant="text">
          Supprimer les filtres
        </Button>
      </Box>
    </Box>
  );
}

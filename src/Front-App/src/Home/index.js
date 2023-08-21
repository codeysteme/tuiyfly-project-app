import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React from "react";
import AppCalendar from "../Components/AppCalendar";
import AppForm from "../Components/AppForm";
import useStyles from "./style";
import AirportSelect from "../Components/AirportSelect";
import AppInputField from "../Components/AppInputField";

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.homeCenterBox}>
      <Box className={classes.homeCenterTop}>
        Découvrez maintenant les Secret Deals dans votre compte myTUI: 10% de
        réduction sur les départs en septembre 2023 et sur toutes les
        expériences.
      </Box>
      <Box className={classes.searchZone}>
        <Box className={classes.searchBlock}>
          <AppForm initialValues={{}} onSubmit={(e) => console.log(e)}>
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
              />
              <AirportSelect
                labelName="Ville d'arrivée"
                name="arrival"
                mention="Sélectionnez une destination"
              />
              <AppCalendar labelName="Date de départ" name="departureDate" />
              <AppCalendar labelName="Date de retour" name="returnDate" />
              <AppInputField
                labelName="Nombre de passager(s)"
                name="passengerNumbers"
                placeHolder="Voyageur(s)"
              />
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
      </Box>
    </Box>
  );
}

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import React from "react";
import AppCalendar from "../Components/AppCalendar";
import AppForm from "../Components/AppForm";
import useStyles from "./style";

export default function Home() {
  const classes = useStyles();

  return (
    <Box className={classes.homeCenterBox}>
      <Box className={classes.homeCenterTop}>
        Découvrez maintenant les Secret Deals dans votre compte myTUI: 10% de
        réduction sur les départs en septembre 2023 et sur toutes les
        expériences.
      </Box>
      <Container className={classes.searchZone}>
        <Box className={classes.searchBlock}>
          <AppForm initialValues={{}} onSubmit={(e) => console.log(e)}>
            <div style={{ display: "flex" }}>
              <AppCalendar labelName="Date de départ" name="departureDate" />
              <AppCalendar labelName="Date de retour" name="returnDate" />
            </div>
          </AppForm>
          <Box>
            <Button className={classes.cleanFilterButton} variant="text">
              Supprimer les filtres
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

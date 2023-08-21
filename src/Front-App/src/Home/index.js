import Box from "@mui/material/Box";
import React from "react";
import useStyles from "./style";
import SearchFlightsFilter from "./SearchFlightsFilter";
import useFlySearchApi from "../hooks/useFlySearchApi";
import { useQuery } from "react-query";

export default function Home() {
  const classes = useStyles();
  const { getAirports } = useFlySearchApi();

  // All queries
  const getAirportsQuery = useQuery("airports", getAirports, {
    placeholderData: [],
    initialDataUpdatedAt: 2,
  });

  return (
    <Box className={classes.homeCenterBox}>
      <Box className={classes.homeCenterTop}>
        Découvrez maintenant les Secret Deals dans votre compte myTUI: 10% de
        réduction sur les départs en septembre 2023 et sur toutes les
        expériences.
      </Box>
      <Box className={classes.searchZone}>
        <SearchFlightsFilter
          airports={getAirportsQuery.data}
          handleFilterSubmit={(e) => console.log(e)}
        />
      </Box>
    </Box>
  );
}

import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useStyles } from "./style";
import SearchFlightsFilter from "./SearchFlightsFilter";
import useFlySearchApi from "../hooks/useFlySearchApi";
import { useQuery } from "react-query";
import ResultFlightBox from "./ResultFlightBox";
import { Button } from "@mui/material";
import BookingScreen from "./BookingScreen";

export default function Home() {
  const classes = useStyles();
  const { getAirports, getFlightsList } = useFlySearchApi();
  const [flightList, setFlightList] = useState({});
  const [flightFilter, setFlighFilter] = useState({});

  // All queries
  const getAirportsQuery = useQuery("airports", getAirports, {
    placeholderData: [],
    initialDataUpdatedAt: 2,
  });

  // All handlers
  async function handleFlightsSubmit(values) {
    setFlighFilter(values);
    const data = await getFlightsList({ pageIndex: 1, ...values });
    setFlightList(data);
  }

  async function handlePagination(index) {
    const data = await getFlightsList({ ...flightFilter, pageIndex: index });
    setFlightList(data);
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box className={classes.homeCenterBox}>
      <Box className={classes.homeCenterTop}>
        Découvrez maintenant les Secret Deals dans votre compte myTUI: 10% de réduction sur les départs en septembre
        2023 et sur toutes les expériences.
      </Box>
      <Box className={classes.searchZone}>
        <SearchFlightsFilter airports={getAirportsQuery.data} handleFilterSubmit={handleFlightsSubmit} />
      </Box>
      <ResultFlightBox flightLists={flightList} handlePagination={handlePagination} />
      <Button onClick={handleOpen}>Open modal</Button>
      <BookingScreen open={open} />
    </Box>
  );
}

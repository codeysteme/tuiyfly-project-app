import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useStyles } from "./style";
import SearchFlightsFilter from "./SearchFlightsFilter";
import useFlySearchApi from "../hooks/useFlySearchApi";
import { useQuery } from "react-query";
import ResultFlightBox from "./ResultFlightBox";
import BookingScreen from "./BookingScreen";
import useBookingApi from "../hooks/useBookingApi";
import { isNil } from "ramda";

export default function Home() {
  const classes = useStyles();
  const [flightList, setFlightList] = useState({});
  const [flightFilter, setFlighFilter] = useState({});
  const [open, setOpen] = useState(false);
  const [flight, setFlight] = useState({});
  const [bookingResult, setBookingResult] = useState({});

  const { getAirports, getFlightsList } = useFlySearchApi();
  const { saveBooking } = useBookingApi();

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

  const handleOpenBooking = (value) => {
    setFlight(value);
    setOpen(!open);
    setBookingResult({});
  };

  async function handleBookingSubmit(value, { resetForm }) {
    try {
      const { data, status } = await saveBooking(value);
      setBookingResult({ msg: data.message, status: status });
      resetForm({});
      console.log(status);
    } catch (err) {
      console.log(isNil(err.response));

      const status = isNil(err.response) ? 500 : err.response.status;
      switch (status) {
        case 409:
          setBookingResult({ msg: err.response.data.message, status: err.response.status });
          break;
        case 400:
          setBookingResult({ msg: err.response.data.message, status: err.response.status });
          break;
        default:
          setBookingResult({ msg: "Erreur serveur, echec opération !", status: 500 });
          break;
      }
    }
  }

  return (
    <Box className={classes.homeCenterBox}>
      <Box className={classes.homeCenterTop}>
        Découvrez maintenant les Secret Deals dans votre compte myTUI: 10% de réduction sur les départs en septembre
        2023 et sur toutes les expériences.
      </Box>
      <Box className={classes.searchZone}>
        <SearchFlightsFilter airports={getAirportsQuery.data} handleFilterSubmit={handleFlightsSubmit} />
      </Box>
      <ResultFlightBox
        flightLists={flightList}
        handlePagination={handlePagination}
        handleOpenBooking={handleOpenBooking}
      />
      {open && (
        <BookingScreen
          open={open}
          flight={flight}
          hanldeOpen={() => setOpen(false)}
          handleSubmit={handleBookingSubmit}
          bookingResult={bookingResult}
        />
      )}
    </Box>
  );
}

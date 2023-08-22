import { arrayOf, bool, func, number, shape, string } from "prop-types";
import React from "react";
import { Box, Button, Card, Pagination, Typography } from "@mui/material";
import { isEmpty } from "ramda";
import { useStyles, resultText } from "./style";
import dayjs from "dayjs";
require("dayjs/locale/fr");

export default function ResultFlightBox({ flightLists, handlePagination, handleOpenBooking }) {
  const classes = useStyles();

  const ResultSearch = ({ flights, total }) => {
    return (
      <Box className={classes.resultBlock}>
        <Typography sx={resultText} variant="h1" component="h2">
          <span style={{ color: "red", fontWeight: "bold" }}>{total}</span> résultats trouvés
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: "1em",
          }}
        >
          {!isEmpty(flights) &&
            flights.map((item, i) => (
              <Card
                style={{
                  display: "flex",
                  width: "310px",
                  margin: "6px 8px",
                  padding: "8px",
                  justifyContent: "space-between",
                  boxShadow: "0 1px 2px 0 #333",
                }}
                variant="outlined"
                key={i}
              >
                <Box sx={{ display: "flex", width: "190px", flexDirection: "column" }}>
                  <Box sx={{ display: "flex", marginBottom: "6px" }}>
                    <Typography
                      component="div"
                      variant="h5"
                      sx={{ fontSize: "13px", fontWeight: "550", color: "#4C4C4C" }}
                    >
                      {item.departure.departureAirport.name} - {item.departure.arrivalAirport.name}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "5px",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          component="img"
                          style={{ height: "20px", marginRight: "8px" }}
                          src={item.departure.logo}
                          alt="logo departure"
                        />
                        <Box>
                          <Typography
                            component="div"
                            variant="p"
                            sx={{ fontSize: "15px", fontWeight: "530", marginBottom: "4px" }}
                          >
                            {dayjs(item.departure.departureDate).format("dddd, DD MMMM")}
                          </Typography>
                          <Typography component="div" variant="p" sx={{ fontSize: "12px", fontWeight: "530" }}>
                            {item.departure.departureAirport.id} - {item.departure.arrivalAirport.id}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        component="div"
                        variant="h6"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "#4C4C4C",
                          width: "20%",
                          textAlign: "center",
                        }}
                      >
                        {item.departure.price}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <img
                          component="img"
                          style={{ height: "20px", marginRight: "8px" }}
                          src={item.arrival.logo}
                          alt="logo arrival"
                        />
                        <Box>
                          <Typography
                            component="div"
                            variant="p"
                            sx={{ fontSize: "15px", fontWeight: "530", marginBottom: "4px" }}
                          >
                            {dayjs(item.arrival.departureDate).format("dddd, DD MMMM")}
                          </Typography>
                          <Typography component="div" variant="p" sx={{ fontSize: "12px", fontWeight: "530" }}>
                            {item.arrival.departureAirport.id} - {item.arrival.arrivalAirport.id}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        component="div"
                        variant="h6"
                        sx={{
                          fontSize: "12px",
                          fontWeight: "600",
                          color: "#4C4C4C",
                          width: "20%",
                          textAlign: "center",
                        }}
                      >
                        {item.arrival.price}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    component="div"
                    variant="h5"
                    style={{
                      fontSize: "25px",
                      fontWeight: "600",
                      padding: "15px 0px",
                      color: "#1a7ead",
                      textAlign: "center",
                      borderRadius: "10px",
                    }}
                  >
                    {item.totalPrice}
                  </Typography>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.buttonBooking}
                    onClick={() => handleOpenBooking(item)}
                  >
                    Réserver
                  </Button>
                </Box>
              </Card>
            ))}
        </Box>
      </Box>
    );
  };

  return (
    <Box style={{ paddingBottom: "50px" }}>
      {!isEmpty(flightLists) && (
        <>
          <ResultSearch total={flightLists.totalResult} flights={flightLists.flights} />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2.5em",
              backgroundColor: "#fff",
              textAlign: "center",
            }}
          >
            <Pagination
              sx={{ padding: "5px", margin: "auto" }}
              count={flightLists.totalPages}
              color="secondary"
              variant="outlined"
              shape="rounded"
              onChange={(e, number) => handlePagination(number)}
            />
          </Box>
        </>
      )}
    </Box>
  );
}

const departureProps = shape({
  logo: string,
  price: string,
  departureDate: string,
  arrivalDate: string,
  departureAirport: shape({
    id: string,
    available: bool,
    countryName: string,
    name: string,
  }),
});

ResultFlightBox.propTypes = {
  isLoading: bool,
  handlePagination: func,
};
ResultFlightBox.defaultProps = {
  flightLists: shape(
    shape({
      totalPages: number,
      totalResult: number,
      flights: arrayOf(
        shape({
          id: number,
          totalPrice: string,
          departure: departureProps,
          arrival: departureProps,
        })
      ),
    })
  ),
  handlePagination: Function.prototype,
};

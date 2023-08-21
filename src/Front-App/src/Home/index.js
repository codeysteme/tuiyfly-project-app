import Box from "@mui/material/Box";
import React, { useState } from "react";
import { useStyles } from "./style";
import SearchFlightsFilter from "./SearchFlightsFilter";
import useFlySearchApi from "../hooks/useFlySearchApi";
import { useQuery } from "react-query";
import ResultFlightBox from "./ResultFlightBox";

export default function Home() {
  const classes = useStyles();
  const { getAirports, getFlightsList } = useFlySearchApi();
  const [flightList, setFlightList] = useState({});

  // All queries
  const getAirportsQuery = useQuery("airports", getAirports, {
    placeholderData: [],
    initialDataUpdatedAt: 2,
  });

  // All handlers
  async function handleFlightsSubmit(values) {
    const data = await getFlightsList({ pageIndex: 1, ...values });
    setFlightList(data);
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
      <ResultFlightBox flightLists={flightList} />
    </Box>
  );
}

const tempo = {
  totalResult: 50,
  pageIndex: 1,
  totalPages: 5,
  flights: [
    {
      totalPrice: "35 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "9 €",
        departureDate: "2023-08-21T23:00:29.6841855+01:00",
        arrivalDate: "2023-08-21T23:15:29.6842417+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "26 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "53 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "18 €",
        departureDate: "2023-08-21T23:00:29.6846141+01:00",
        arrivalDate: "2023-08-21T23:15:29.6846152+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "35 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "71 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "27 €",
        departureDate: "2023-08-21T23:00:29.6846162+01:00",
        arrivalDate: "2023-08-21T23:15:29.6846163+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "44 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "89 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "36 €",
        departureDate: "2023-08-21T23:00:29.6846167+01:00",
        arrivalDate: "2023-08-21T23:15:29.684617+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "53 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "107 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "45 €",
        departureDate: "2023-08-21T23:00:29.6846174+01:00",
        arrivalDate: "2023-08-21T23:15:29.6846175+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "62 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "125 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "54 €",
        departureDate: "2023-08-21T23:00:29.6846187+01:00",
        arrivalDate: "2023-08-21T23:15:29.6846189+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "71 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "143 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "63 €",
        departureDate: "2023-08-21T23:00:29.6846193+01:00",
        arrivalDate: "2023-08-21T23:15:29.6846194+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "80 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "161 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "72 €",
        departureDate: "2023-08-21T23:00:29.6846198+01:00",
        arrivalDate: "2023-08-21T23:15:29.6846199+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "89 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "179 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "81 €",
        departureDate: "2023-08-21T23:00:29.6846203+01:00",
        arrivalDate: "2023-08-21T23:15:29.6846204+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "98 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
    {
      totalPrice: "197 €",
      departure: {
        logo: "https://localhost:44304/images/tuifly-logo.gif",
        price: "90 €",
        departureDate: "2023-08-21T23:00:29.684621+01:00",
        arrivalDate: "2023-08-21T23:15:29.6846211+01:00",
        departureAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
        arrivalAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
      },
      arrival: {
        logo: "https://localhost:44304/images/ryanair-logo.gif",
        price: "107 €",
        departureDate: "2023-08-22T00:00:00+01:00",
        arrivalDate: "2023-08-22T00:15:00+01:00",
        departureAirport: {
          id: "FUE",
          available: true,
          countryName: "Espagne",
          name: "Fuerteventura",
        },
        arrivalAirport: {
          id: "ACE",
          available: true,
          countryName: "Espagne",
          name: "Lanzarote",
        },
      },
    },
  ],
};

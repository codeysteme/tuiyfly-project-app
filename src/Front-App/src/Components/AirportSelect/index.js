import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { string } from "prop-types";
import { InputAdornment, InputLabel } from "@mui/material";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";

export default function AirportSelect({ name, mention, labelName }) {
  return (
    <Box>
      <InputLabel
        htmlFor="filled-adornment-password"
        style={{
          fontSize: "13px",
          fontWeight: "normal",
          color: "#09295D",
        }}
      >
        {labelName}
      </InputLabel>
      <Autocomplete
        size={"small"}
        freeSolo
        sx={{
          width: "225px",
          bgcolor: "#fff",
          input: { fontSize: "13px" },
          svg: { color: "#1a7ead", fontSize: "20px" },
        }}
        options={airports}
        disableClearable
        getOptionLabel={(option) => option.name}
        renderOption={(props, option) => (
          <Box
            component="li"
            style={{ display: "flex", justifyContent: "space-between" }}
            {...props}
          >
            <div
              style={{
                color: "#1a7ead",
                fontSize: "13px",
              }}
            >
              {option.name}, {option.countryName}
            </div>
            <div
              style={{
                backgroundColor: "#C6EAFB",
                color: "#4D4D4D",
                padding: "2px 4px",
                borderRadius: "5px",
                fontWeight: "none",
                fontSize: "12px",
              }}
            >
              {option.id}
            </div>
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder={mention}
            fullWidth
            InputProps={{
              ...params.InputProps,
              autoComplete: "new-password",
              startAdornment: (
                <InputAdornment position="start">
                  <FlightTakeoffIcon />
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </Box>
  );
}

AirportSelect.propTypes = {
  name: string.isRequired,
  labelName: string,
  mention: string,
};

AirportSelect.defaultProps = {
  labelName: "",
};

const airports = [
  {
    id: "ACE",
    available: true,
    countryName: "Espagne",
    name: "Lanzarote",
  },
  {
    id: "AGP",
    available: true,
    countryName: "Espagne",
    name: "Malaga",
  },
  {
    id: "ALC",
    available: true,
    countryName: "Espagne",
    name: "Alicante",
  },
  {
    id: "FUE",
    available: true,
    countryName: "Espagne",
    name: "Fuerteventura",
  },
  {
    id: "GRO",
    available: true,
    countryName: "Espagne",
    name: "Gérone",
  },
  {
    id: "IBZ",
    available: true,
    countryName: "Espagne",
    name: "Ibiza",
  },
  {
    id: "LEI",
    available: true,
    countryName: "Espagne",
    name: "Almería",
  },
  {
    id: "LPA",
    available: true,
    countryName: "Espagne",
    name: "Gran Canaria",
  },
  {
    id: "MAH",
    available: true,
    countryName: "Espagne",
    name: "Minorque",
  },
  {
    id: "PMI",
    available: true,
    countryName: "Espagne",
    name: "Palma de Majorque",
  },
  {
    id: "REU",
    available: true,
    countryName: "Espagne",
    name: "Reus",
  },
  {
    id: "RMU",
    available: true,
    countryName: "Espagne",
    name: "Murcia-Corvera",
  },
  {
    id: "TFS",
    available: true,
    countryName: "Espagne",
    name: "Tenerife",
  },
  {
    id: "XRY",
    available: true,
    countryName: "Espagne",
    name: "Jerez",
  },
  {
    id: "ADB",
    available: true,
    countryName: "Turquie",
    name: "Izmir",
  },
  {
    id: "AOE",
    available: true,
    countryName: "Turquie",
    name: "Eskisehir",
  },
  {
    id: "ASR",
    available: true,
    countryName: "Turquie",
    name: "Kayseri",
  },
  {
    id: "AYT",
    available: true,
    countryName: "Turquie",
    name: "Antalya",
  },
  {
    id: "BJV",
    available: true,
    countryName: "Turquie",
    name: "Bodrum",
  },
  {
    id: "DLM",
    available: true,
    countryName: "Turquie",
    name: "Dalaman",
  },
  {
    id: "AGA",
    available: true,
    countryName: "Maroc",
    name: "Agadir",
  },
  {
    id: "AHU",
    available: true,
    countryName: "Maroc",
    name: "Al Hoceima",
  },
  {
    id: "CMN",
    available: true,
    countryName: "Maroc",
    name: "Casablanca",
  },
  {
    id: "FEZ",
    available: true,
    countryName: "Maroc",
    name: "Fez",
  },
  {
    id: "NDR",
    available: true,
    countryName: "Maroc",
    name: "Nador",
  },
  {
    id: "OUD",
    available: true,
    countryName: "Maroc",
    name: "Oujda",
  },
  {
    id: "RAK",
    available: true,
    countryName: "Maroc",
    name: "Marrakech",
  },
  {
    id: "RBA",
    available: true,
    countryName: "Maroc",
    name: "Rabat",
  },
  {
    id: "TNG",
    available: true,
    countryName: "Maroc",
    name: "Tanger",
  },
  {
    id: "TTU",
    available: true,
    countryName: "Maroc",
    name: "Tetouan",
  },
  {
    id: "ALG",
    available: true,
    countryName: "Algérie",
    name: "Alger",
  },
  {
    id: "BJA",
    available: true,
    countryName: "Algérie",
    name: "Bejaia",
  },
  {
    id: "CZL",
    available: true,
    countryName: "Algérie",
    name: "Constantine",
  },
  {
    id: "ORN",
    available: true,
    countryName: "Algérie",
    name: "Oran",
  },
  {
    id: "TLM",
    available: true,
    countryName: "Algérie",
    name: "Tlemcen",
  },
  {
    id: "ANR",
    available: true,
    countryName: "Belgique",
    name: "Anvers",
  },
  {
    id: "BRU",
    available: true,
    countryName: "Belgique",
    name: "Bruxelles",
  },
  {
    id: "CRL",
    available: true,
    countryName: "Belgique",
    name: "Charleroi",
  },
  {
    id: "LGG",
    available: true,
    countryName: "Belgique",
    name: "Liège",
  },
  {
    id: "OST",
    available: true,
    countryName: "Belgique",
    name: "Ostende-Bruges",
  },
  {
    id: "BDS",
    available: true,
    countryName: "Italie",
    name: "Brindisi",
  },
  {
    id: "BGY",
    available: true,
    countryName: "Italie",
    name: "Milan-Bergamo",
  },
  {
    id: "BLQ",
    available: true,
    countryName: "Italie",
    name: "Bologna",
  },
  {
    id: "CTA",
    available: true,
    countryName: "Italie",
    name: "Catane",
  },
  {
    id: "NAP",
    available: true,
    countryName: "Italie",
    name: "Naples",
  },
  {
    id: "PMO",
    available: true,
    countryName: "Italie",
    name: "Palerme",
  },
  {
    id: "SUF",
    available: true,
    countryName: "Italie",
    name: "Lamezia Terme",
  },
  {
    id: "BJL",
    available: true,
    countryName: "Gambie",
    name: "Banjul",
  },
  {
    id: "BOD",
    available: true,
    countryName: "France",
    name: "Bordeaux",
  },
  {
    id: "ETZ",
    available: true,
    countryName: "France",
    name: "Metz-Nancy",
  },
  {
    id: "LIL",
    available: true,
    countryName: "France",
    name: "Lille",
  },
  {
    id: "ORY",
    available: true,
    countryName: "France",
    name: "Paris-Orly",
  },
  {
    id: "BOJ",
    available: true,
    countryName: "Bulgarie",
    name: "Burgas",
  },
  {
    id: "VAR",
    available: true,
    countryName: "Bulgarie",
    name: "Varna",
  },
  {
    id: "BVC",
    available: true,
    countryName: "Cap-Vert",
    name: "Boa Vista",
  },
  {
    id: "SID",
    available: true,
    countryName: "Cap-Vert",
    name: "Sal",
  },
  {
    id: "CFU",
    available: true,
    countryName: "Grèce",
    name: "Corfou",
  },
  {
    id: "CHQ",
    available: true,
    countryName: "Grèce",
    name: "Crete -Chania",
  },
  {
    id: "GPA",
    available: true,
    countryName: "Grèce",
    name: "Araxos",
  },
  {
    id: "HER",
    available: true,
    countryName: "Grèce",
    name: "Crete -Heraklion",
  },
  {
    id: "JMK",
    available: true,
    countryName: "Grèce",
    name: "Mykonos",
  },
  {
    id: "JTR",
    available: true,
    countryName: "Grèce",
    name: "Santorin",
  },
  {
    id: "KGS",
    available: true,
    countryName: "Grèce",
    name: "Kos",
  },
  {
    id: "MJT",
    available: true,
    countryName: "Grèce",
    name: "Lesbos",
  },
  {
    id: "RHO",
    available: true,
    countryName: "Grèce",
    name: "Rhodes",
  },
  {
    id: "SKG",
    available: true,
    countryName: "Grèce",
    name: "Thessalonique",
  },
  {
    id: "SMI",
    available: true,
    countryName: "Grèce",
    name: "Samos",
  },
  {
    id: "ZTH",
    available: true,
    countryName: "Grèce",
    name: "Zakynthos",
  },
  {
    id: "CUN",
    available: true,
    countryName: "Mexique",
    name: "Cancun",
  },
  {
    id: "DBV",
    available: true,
    countryName: "Croatie",
    name: "Dubrovnik",
  },
  {
    id: "SPU",
    available: true,
    countryName: "Croatie",
    name: "Split",
  },
  {
    id: "DJE",
    available: true,
    countryName: "Tunisie",
    name: "Djerba",
  },
  {
    id: "NBE",
    available: true,
    countryName: "Tunisie",
    name: "Enfidha",
  },
  {
    id: "TUN",
    available: true,
    countryName: "Tunisie",
    name: "Tunis",
  },
  {
    id: "DSS",
    available: true,
    countryName: "Sénégal",
    name: "Dakar",
  },
  {
    id: "PRN",
    available: true,
    countryName: "Kosovo",
    name: "Pristina",
  },
  {
    id: "TIA",
    available: true,
    countryName: "Albanie",
    name: "Tirana",
  },
  {
    id: "TIV",
    available: true,
    countryName: "Monténégro",
    name: "Tivat",
  },
  {
    id: "EIN",
    available: true,
    countryName: "Pays-Bas",
    name: "Eindhoven",
  },
  {
    id: "RTM",
    available: true,
    countryName: "Pays-Bas",
    name: "Rotterdam",
  },
  {
    id: "FAO",
    available: true,
    countryName: "Portugal",
    name: "Faro",
  },
  {
    id: "FNC",
    available: true,
    countryName: "Portugal",
    name: "Madère",
  },
  {
    id: "PDL",
    available: true,
    countryName: "Portugal",
    name: "Açores Ponta Delgada",
  },
  {
    id: "HRG",
    available: true,
    countryName: "Égypte",
    name: "Hurghada",
  },
  {
    id: "LXR",
    available: true,
    countryName: "Égypte",
    name: "Luxor",
  },
  {
    id: "RMF",
    available: true,
    countryName: "Égypte",
    name: "Marsa Alam",
  },
  {
    id: "SSH",
    available: true,
    countryName: "Égypte",
    name: "Sharm El Sheikh",
  },
  {
    id: "INN",
    available: true,
    countryName: "Autriche",
    name: "Innsbruck",
  },
  {
    id: "KTT",
    available: true,
    countryName: "Finlande",
    name: "Kittila-Laponie",
  },
  {
    id: "LCA",
    available: true,
    countryName: "Chypre",
    name: "Larnaca",
  },
  {
    id: "PFO",
    available: true,
    countryName: "Chypre",
    name: "Paphos",
  },
  {
    id: "MBJ",
    available: true,
    countryName: "Jamaïque",
    name: "Montego Bay",
  },
  {
    id: "PUJ",
    available: true,
    countryName: "République dominicaine",
    name: "Punta Cana",
  },
  {
    id: "VRA",
    available: true,
    countryName: "Cuba",
    name: "Varadero",
  },
];

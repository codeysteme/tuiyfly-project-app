import { Box } from "@material-ui/core";
import React from "react";

export default function Home() {
  return (
    <Box>
      <Box
        style={{
          backgroundColor: "#D40E14",
          color: "#fff",
          textAlign: "center",
          padding: "10px",
          lineHeight: "21px",
          marginBottom: "1px",
          fontSize: "16px",
        }}
      >
        Découvrez maintenant les Secret Deals dans votre compte myTUI: 10% de
        réduction sur les départs en septembre 2023 et sur toutes les
        expériences.
      </Box>
    </Box>
  );
}

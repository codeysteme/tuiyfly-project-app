import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React from "react";
import logo from "../static/tuifly-logo.png";
import { Box } from "@mui/material";

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          component="div"
        >
          <img src={logo} alt="logo tuifly" style={{ width: "137px" }} />
        </IconButton>
        <Box>
          <Typography
            variant="h6"
            component="div"
            style={{
              fontSize: "17px",
              textAlign: "center",
              fontFamily: "roboto",
            }}
          >
            Trouvez les vols qu'il vous faut à moindres frais, réserver sans
            contrainte.
          </Typography>
        </Box>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar
        style={{ margin: 0, backgroundColor: "#70CBF4" }}
        component="nav"
        position="relative"
        color="transparent"
      >
        {displayDesktop()}
      </AppBar>
    </header>
  );
}

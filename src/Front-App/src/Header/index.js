import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import logo from "../static/tuifly-logo.png";

export default function Header() {
  const displayDesktop = () => {
    return (
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{ width: "120px" }}
          />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{
            marginLeft: "200px",
            fontSize: "19px",
            width: "100%",
            textAlign: "center",
            fontFamily: "roboto",
          }}
        >
          Trouvez les vols qu'il vous faut à moindres frais, réserver sans
          contrainte.
        </Typography>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar
        style={{ margin: 0 }}
        component="nav"
        position="relative"
        color="transparent"
      >
        {displayDesktop()}
      </AppBar>
    </header>
  );
}

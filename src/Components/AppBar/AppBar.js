import React, { useState } from "react";
import { StyledAppBar, StyledLogo } from "./AppBar.styled";
import { Grid, IconButton, Toolbar } from "@mui/material";
import nasaLogo from "../../resources/images/NASA.png";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function AppBarNasa() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  const location = useLocation();

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Grid
          container
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <Grid item>
            <IconButton onClick={handleBack} sx={{ color: "white", display: location.pathname === "/" ? "none" : "flex" }}>
              <ArrowBackIcon />
            </IconButton>
          </Grid>
          <Grid item>{location.pathname === "/" ? <SearchBar /> : <></>}</Grid>
          <Grid item>
            <StyledLogo src={nasaLogo} alt="logo" />
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
}

import React from "react";
import { StyledAppBar, StyledLogo } from "./AppBar.styled";
import { Grid, IconButton, Toolbar } from "@mui/material";
import nasaLogo from "../../resources/images/NASA.png";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";


export default function AppBarNasa() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/");
  };

  
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Grid
          container
          sx={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Grid item>
          <IconButton onClick={handleBack} aria-label="back">
        <ArrowBackIcon />
      </IconButton>
          </Grid>
          <Grid item>
            <SearchBar />
          </Grid>
          <Grid item>
            <StyledLogo src={nasaLogo} alt="logo" />
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
}

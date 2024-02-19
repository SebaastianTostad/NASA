import React from "react";
import { StyledAppBar, StyledLogo } from "./AppBar.styled";
import {
  Grid,
  IconButton,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import nasaLogo from "../../resources/images/NASA.png";
export default function AppBarNasa() {
  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Grid container sx={{width: "100%", justifyContent:"space-between"}}>
        <Grid item>
          <StyledLogo src={nasaLogo} alt="logo" />
          </Grid>
          <Grid item>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </StyledAppBar>
  );
}

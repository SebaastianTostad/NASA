import { Grid } from "@mui/material";
import {  styled } from "@mui/material/styles";

export const StyledGrid = styled(Grid)(()=>({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 20, 
    padding: 20,
  }))
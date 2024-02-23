import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledMainBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "calc(100vh-100px)",
}));

export const StyledMainCard = styled(Card)(() => ({
  width: "100%",
  maxWidth: "800px",
  overflow: "hidden",
}));

export const StyledInnerBox = styled(Box)(({theme}) => ({
    padding: theme.spacing(2)
}))
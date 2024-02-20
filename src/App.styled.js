import {  Card,  Box, Grid,  } from "@mui/material";
import { createTheme, styled } from "@mui/material/styles";

export const theme = createTheme({
  breakpoints: {
    values: {
      xxs: 0, // small phone
      xs: 300, // phone
      sm: 600, // tablets
      md: 900, // small laptop
      lg: 1200, // desktop
      xl: 1536 // large screens
    }},
  typography: {
    fontFamily: "'Poppins', sans-serif",
    h1: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "1.3em !important",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.9rem !important",
      fontWeight: "600 !important",
      fontStyle: "normal !important",
      lineHeight: "18px !important",
      display: "flex !important",
      alignItems: "center !important",
      width: "100%",
      textAlign: "center",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.9rem !important",
      fontWeight: "700 !important",
      fontStyle: "normal !important",
      lineHeight: "20px !important",
      display: "flex !important",
      alignItems: "center !important",
      textAlign: "center",
    },
    p: {
      fontFamily: "'Poppins', sans-serif",
      fontSize: "0.9rem !important",
      fontWeight: "400 !important",
      fontStyle: "normal !important",
      lineHeight: "20px !important",
      display: "flex !important",
      alignItems: "center !important",
      marginBottom: 0,
      width: "100%",
      textAlign: "center",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: "'Poppins', sans-serif",
          backgroundColor: "#282c34 !important",
        },
        overflowY: "none",
        scrollbarWidth: "thin",
        scrollbarColor: "transparent",
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#f5f5f5",
          borderRadius: "3px",
        },
      },
    },
  },
});




export const CustomCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== "smaller",
})(({ theme, smaller }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  minHeight: "450px",
  height: smaller ? "75%" : "97%",
  alignItems: "center",
  backgroundColor: "#ffffff",
  borderRadius: "24px !important",
  boxShadow: "none",
}));



export const RouterOutlet = styled(Box)(({ theme }) => ({
  marginTop: "65px", // Adjust the margin based on the drawer width when open
  height: "100%",
  width: "100%", // Adjust width dynamically
  padding: theme.spacing(2),
}));

export const StyledGrid = styled(Grid)(()=>({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: 20, 
  padding: 20,
}))



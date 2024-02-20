import { AppBar } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)(()=>({
   backgroundColor: "#282c34",
   borderBottom:" 0.5px solid white",
   
}))

export const StyledLogo = styled("img")(({theme}) => ({
    maxHeight: "60px",
    width: "auto", 
    objectFit: "contain", 
    margin: "0 auto", 
    display: "block", 
    [theme.breakpoints.down('sm')]: { 
      display: "none"
    }
  }));
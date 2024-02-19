import { Box, Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  position: 'relative', 
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: 10,
  overflow: "hidden",
  backgroundColor:" transparent",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
  maxWidth: '345px', 
  height: 400,
  width: 500,
  [theme.breakpoints.down("lg")]: {
    flexDirection: "row",
  },
}));

export const StyledImage = styled("img")({
  width: "100%",
  height: "100%", // Adjust height to cover the card
  objectFit: "cover", // Ensure image covers the card area
  position: 'absolute', // Make image cover the whole card area
  top: 0,
  left: 0,
});

export const TextOverlay = styled("div")(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  background: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  color: 'white', // Text color
  padding: '16px', // Padding inside the overlay
  boxSizing: 'border-box', // Ensure padding is included in width/height
}));

// Add this new styled component to your existing styled definitions
export const FlipContainer = styled("div")(({ isFlipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.6s',
  transformStyle: 'preserve-3d',
  transform: isFlipped ? 'rotateY(180deg)' : 'none',
}));

export const CardFront = styled(Box)({
  position: "absolute",
  width: "100%",
  padding:"16px",
  height: "100%",
  backfaceVisibility: "hidden", // Hide when flipped
});

export const CardBack = styled(Box)({
  position: "absolute",
  backgroundColor:" white",
  width: "100%",
  height: "100%",
  padding:"16px",
  backfaceVisibility: "hidden", // Hide when flipped
  transform: "rotateY(180deg)", // Rotate back side
  alignItems: "flex-start", // Align items to the start of the flex container (left)
  textAlign: "left", // Ensure text aligns to the left

});
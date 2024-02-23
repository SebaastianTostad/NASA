import {  Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledCard = styled(Card)({
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  borderRadius: '10px',
  overflow: 'hidden',
  transition: '0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.03)',
  },
  backgroundColor: 'transparent',
  boxShadow: 'none', // Remove MUI Card default boxShadow
});

export const StyledImage = styled('img')({
  width: '100%',
  height: 'auto',
  objectFit: 'cover',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)', // Optional: adds a slight separation between the image and the overlay/text content
});

export const TextOverlay = styled('div')({
  position: 'absolute',
  bottom: 0,
  left: 0,
  width: '100%',
  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  color: 'white',
  padding: '20px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
});
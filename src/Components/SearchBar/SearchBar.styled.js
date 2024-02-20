import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';

// Use theme breakpoints for responsive styles
export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2px 8px",
  display: "flex",
  alignItems: "center",
  width: 400, // Default width for larger screens
  borderRadius: "25px",
  [theme.breakpoints.down('sm')]: { // Adjustments for small screens
    width: 'auto', // Use 'auto' or a specific value for smaller screens
    padding: '2px 4px', // Reduce padding for smaller screens
  },
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  ml: 1,
  flex: 1,
  [theme.breakpoints.down('sm')]: {
    // Add any specific styles for small screens if needed
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  height: 28,
  m: 0.5,
  [theme.breakpoints.down('sm')]: {
    // Add any specific styles for small screens if needed
  },
}));

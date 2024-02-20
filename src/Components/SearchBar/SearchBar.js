import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import {
  StyledDivider,
  StyledInputBase,
  StyledPaper, // Assuming StyledPaper is a styled(Paper) with specific styles
} from './SearchBar.styled';
import { useDispatch } from 'react-redux';
import { setQueryInput } from '../../redux/searchSlice/searchSlice';

export default function SearchBar() {
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the form from causing a page reload
    dispatch(setQueryInput(searchText));
  };

  return (
    <StyledPaper component="form" onSubmit={handleSearch}>
      <StyledInputBase
        placeholder="Search NASA Collections"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <IconButton
        type="submit" // Change type to 'submit' to trigger form submission
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <StyledDivider orientation="vertical" />
      <IconButton type="button" aria-label="filters">
        <TuneIcon />
      </IconButton>
    </StyledPaper>
  );
}

import React, { useState } from "react";
import { Badge, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import {
  StyledDivider,
  StyledInputBase,
  StyledPaper, // Assuming StyledPaper is a styled(Paper) with specific styles
} from "./SearchBar.styled";
import { useDispatch, useSelector } from "react-redux";
import { setQueryInput } from "../../redux/searchSlice/searchSlice";
import Filters from "../Filters/Filters";

export default function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const [open, setOpen] = useState();
  const extraFilters = useSelector((state) => state.search.extraFilters);

  const countNonEmptyFilters = () => {
    return Object.values(extraFilters).filter((value) => value !== "" &&  value !== null ).length;
  };
  
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(setQueryInput(searchText));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <StyledPaper component="form" onSubmit={handleSearch}>
      <StyledInputBase placeholder="Search NASA Collections" value={searchText} onChange={(event) => setSearchText(event.target.value)} />
      <IconButton
        type="submit" // Change type to 'submit' to trigger form submission
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <StyledDivider orientation="vertical" />
      {countNonEmptyFilters() === 0 ? (
        <IconButton type="button" aria-label="filters" onClick={handleOpen}>
          <TuneIcon />
        </IconButton>
      ) : (
        <Badge badgeContent={countNonEmptyFilters()}  color="primary" >
          <IconButton type="button" aria-label="filters" onClick={handleOpen}>
            <TuneIcon />
          </IconButton>
        </Badge>
      )}
      <Filters open={open} handleClose={handleClose} />
    </StyledPaper>
  );
}

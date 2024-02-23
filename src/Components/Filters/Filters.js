import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogTitle, Grid, Grow, IconButton, SvgIcon, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ApplyButton, ClearButton, CustomDialogContent, CustomTextField, TitleGrid } from "./Filters.styled";
import { useDispatch } from "react-redux";
import { setExtraFilters } from "../../redux/searchSlice/searchSlice";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { format } from "date-fns";

export default function Filters(props) {
  const dispatcher = useDispatch();
  const [formFields, setFormFields] = useState({
    photographer: "",
    center: "",
    description: "",
    title: "",
    year_start: null,
    year_end: null,
  });

  const handleFiledClear = () => {
    setFormFields({
      photographer: "",
      center: "",
      description: "",
      title: "",
      year_start: null,
      year_end: null,
    });
    dispatcher(
      setExtraFilters({
        photographer: "",
        center: "",
        description: "",
        title: "",
        year_start: null,
        year_end: null,
      })
    );
    props.handleClose();
  };

  const handleFieldChange = (field, value) => {
    setFormFields((prev) => ({ ...prev, [field]: value }));
  };

  const applyChanges = () => {
    const customFields = {
      ...formFields,
      year_start: formFields.year_start ? format(new Date(formFields.year_start), "yyyy") : "",
      year_end: formFields.year_end ? format(new Date(formFields.year_end), "yyyy") : "",
    };
    dispatcher(setExtraFilters(customFields));
    props.handleClose();
  };

  return (
    <Dialog sx={{ "& .MuiDialog-paper": { maxHeight: "fit-content" } }} maxWidth={"sm"} open={props.open} onClose={props.handleClose} transitionDuration={500}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DialogTitle>
          <TitleGrid container>
            <Grid item xs>
              <Grow in timeout={800}>
                <Typography variant="h3">Filters</Typography>
              </Grow>
            </Grid>
            <Grid item xs textAlign="right">
              <IconButton onClick={props.handleClose}>
                <SvgIcon>
                  <CloseIcon />
                </SvgIcon>
              </IconButton>
            </Grid>
          </TitleGrid>
        </DialogTitle>
        <CustomDialogContent>
          {/* Photographer Field */}
          <TitleGrid container>
            <Typography variant="p">Photographer</Typography>
          </TitleGrid>
          <CustomTextField fullWidth value={formFields.photographer} onChange={(e) => handleFieldChange("photographer", e.target.value)} />
          {/* Center Field */}
          <TitleGrid container>
            <Typography variant="p">Center</Typography>
          </TitleGrid>
          <CustomTextField fullWidth value={formFields.center} onChange={(e) => handleFieldChange("center", e.target.value)} />
          {/* Description Field */}
          <TitleGrid container>
            <Typography variant="p">Description</Typography>
          </TitleGrid>
          <CustomTextField fullWidth value={formFields.description} onChange={(e) => handleFieldChange("description", e.target.value)} />
          {/* Title Field */}
          <TitleGrid container>
            <Typography variant="p">Title</Typography>
          </TitleGrid>
          <CustomTextField fullWidth value={formFields.title} onChange={(e) => handleFieldChange("title", e.target.value)} />
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TitleGrid container>
                <Typography variant="p">Year Start</Typography>
              </TitleGrid>
              <DatePicker
                views={["year"]}
                value={formFields.year_start}
                onChange={(newValue) => {
                  handleFieldChange("year_start", newValue);
                }}
                renderInput={(params) => <CustomTextField {...params} fullWidth />}
              />
            </Grid>

            {/* Date To Field */}
            <Grid item xs={12} sm={6}>
              <TitleGrid container>
                <Typography variant="p">Year End</Typography>
              </TitleGrid>
              <DatePicker
                views={["year"]}
                value={formFields.year_end}
                onChange={(newValue) => {
                  handleFieldChange("year_end", newValue);
                }}
                renderInput={(params) => <CustomTextField {...params} fullWidth />}
              />
            </Grid>
          </Grid>
        </CustomDialogContent>
        <DialogActions>
          <Grid container justifyContent="space-between">
            <ClearButton onClick={handleFiledClear}>
              <Typography variant="p">Clear All </Typography>
            </ClearButton>
            <ApplyButton onClick={applyChanges}>
              <Typography variant="p">Apply</Typography>
            </ApplyButton>
          </Grid>
        </DialogActions>
      </LocalizationProvider>
    </Dialog>
  );
}

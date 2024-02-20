import { Grid,  Typography } from "@mui/material";
import React  from "react";
import {
  StyledCard,
  StyledImage,
  TextOverlay,
} from "./MediaCard.styled";
import { useDispatch } from "react-redux";
import { selectCard } from "../redux/searchSlice/detailSlice";
import { useNavigate } from "react-router-dom";




export default function MediaCard(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { data, links } = props?.image;

  const { title, location, photographer } = data[0];
  const thumbnail = links ? links[0].href : undefined;


  const handleClick = () => {
    dispatch(selectCard(props));
    navigate(`/detail/${data[0].nasa_id}`)
  };
  return (
    <StyledCard onClick={handleClick}>
        <StyledImage src={thumbnail} alt={title} />
        <TextOverlay>
          <Typography variant="h3" sx={{ marginBottom: 2 }}>
            {title}
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography
                variant="p"
                sx={{ color: "#F9F6EE", fontWeight: "200 !important" }}
              >
                Location
              </Typography>
              <Typography variant="p">{location || "N/A"}</Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="p"
                sx={{
                  color: "#F9F6EE",
                  fontWeight: "200 !important",
                  textAlign: "right",
                  width: "100%",
                }}
              >
                Taken By
              </Typography>
              <Typography variant="p">{photographer || "N/A"}</Typography>
            </Grid>
          </Grid>
        </TextOverlay>
    </StyledCard>
  );
}

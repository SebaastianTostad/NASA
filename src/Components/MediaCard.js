import { Box, CardContent, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  CardBack,
  CardFront,
  CardInner,
  FlipContainer,
  StyledCard,
  StyledImage,
  TextOverlay,
} from "./MediaCard.styled";
import { useLazyGetMetadataQuery } from "../redux/nasaApi";

export default function MediaCard(props) {
  const [isFlipped, setIsFlipped] = useState(false);
  const { data, links } = props.image;
  const { title, location, photographer } = data[0];
  const thumbnail = links[0].href;

  const handleFlip = () => {
    console.log(data);
    setIsFlipped(!isFlipped);
  };

  return (
    <StyledCard onClick={handleFlip}>
      <FlipContainer isFlipped={isFlipped}>
        {!isFlipped ? (
          <CardFront>
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
                    sx={{ color: "#F9F6EE", fontWeight: "200 !important" , textAlign: "right", width:"100%" }}
                  >
                    Taken By
                  </Typography>
                  <Typography variant="p">{photographer || "N/A"}</Typography>
                </Grid>
              </Grid>
            </TextOverlay>
          </CardFront>
        ) : (
          <CardBack>
             <Typography variant="h3" sx={{ marginBottom: 5, textAlign: "left", }}>
               Description
              </Typography>
            <Typography variant="p" sx={{ marginBottom: 2, textAlign: "left", overflow: "auto", maxHeight: 280, }}>{data[0].description}</Typography>
          </CardBack>
        )}
      </FlipContainer>
    </StyledCard>
  );
}

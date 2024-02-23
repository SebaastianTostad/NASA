import { Box, Card, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { format } from "date-fns"; // Ensure this is imported correctly
import Carousel from "react-material-ui-carousel"; // An example carousel component you might need to install
import { useSelector } from "react-redux";
import { StyledInnerBox, StyledMainBox, StyledMainCard } from "./DetailPage.styled";

export default function DetailPage() {
  const { image } = useSelector((state) => state.detail.selectedCard);
  const { data, links } = image;

  const ImageCarousel = ({ links }) => {
    // Assuming you want to use the first image in the links array as the background
    const backgroundImageUrl = links.length > 0 ? links[0].href : "";

    return (
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          height: "500px", // Adjust based on your needs
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)", // Apply blur directly to the image
            transform: "scale(1.1)", // Slightly scale up the background to mitigate blur edge artifacts
            zIndex: 0,
          },
        }}
      >
        <Carousel autoPlay={false} animation="slide" sx={{ position: "relative", zIndex: 1 }}>
          {links.map((link, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%", // Use 100% height of the parent
              }}
            >
              <img src={link.href} alt={`Slide ${index}`} style={{ width: "auto", maxHeight: "100%", objectFit: "contain" }} />
            </Box>
          ))}
        </Carousel>
      </Box>
    );
  };

  return (
    <StyledMainBox>
      <StyledMainCard>
        <Box>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              {links && links.length > 0 && <ImageCarousel links={links} />}
            </Grid>
            <Grid item xs={12}>
              <StyledInnerBox>
                <Grid container justifyContent="space-between" sx={{ marginBottom: "16px" }}>
                  <Grid item>
                    <Typography variant="h3">{data[0].title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="p">Created Date: {format(new Date(data[0].date_created), "dd MMM, yyyy hh:mm a")}</Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="h2" sx={{ textAlign: "left !important" }} gutterBottom>
                    Description: {data[0].description}
                  </Typography>
                </Grid>

                <Grid container justifyContent="space-between" sx={{ marginTop: "16px" }}>
                  <Grid item>
                    <Typography variant="p">Location: {data[0].location || "N/A"}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="p">Photographer: {data[0].photographer || "N/A"}</Typography>
                  </Grid>
                </Grid>
              </StyledInnerBox>
            </Grid>
          </Grid>
        </Box>
      </StyledMainCard>
    </StyledMainBox>
  );
}

import React from 'react';
import { Box, Card, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { format } from 'date-fns'; 

export default function DetailPage() {
  const { image } = useSelector((state) => state.detail.selectedCard);
  const { data, links } = image;


  return (
    <Card sx={{maxWidth: "500px"}}>
    <Box p={2}>
      <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
            {links.map((link, index) => (
              <div key={index}>
                <img src={link.href} alt={`Slide ${index}`} style={{ width: '100%', maxHeight: '500px', objectFit: 'contain' }} />
              </div>
            ))}
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="h4" gutterBottom>
            {data[0].title}
          </Typography>
          <Typography variant="subtitle1">
            Location: {data[0].location || 'N/A'}
          </Typography>
          <Typography variant="subtitle1">
            Photographer: {data[0].photographer || 'N/A'}
          </Typography>
          <Typography paragraph>Description: {data[0].description}</Typography>
          <Typography paragraph>Date: {format(new Date(data[0].date_created), "dd MMM, yyyy hh:mm a")}</Typography>
        </Grid>
      </Grid>
    </Box>
    
    </Card>
  );
}

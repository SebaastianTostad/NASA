import React from 'react';
import { useSelector } from 'react-redux';
import { useGetImagesQuery } from '../../redux/nasaApi';
import MediaCard from '../MediaCard';
import { CircularProgress, Box } from '@mui/material';
import Masonry from '@mui/lab/Masonry'; // Import Masonry from @mui/lab

export default function SearchPage() {
  const query = useSelector((state) => state.search.q);
  const { data, isFetching } = useGetImagesQuery(query, { skip: !query });

  return isFetching ? (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <CircularProgress 
        size={60}
        thickness={4}
        sx={{ color: 'primary.main' }}
      />
    </Box>
  ) : (
    data && (
      <Masonry columns={{ xs: 2, sm: 3, md: 4, l:6 }} spacing={2}> 
        {data?.collection.items.map((item, index) => (
          <MediaCard key={index} image={item} />
        ))}
      </Masonry>
    )
  );
}

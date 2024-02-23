import React from "react";
import { useSelector } from "react-redux";
import { useGetImagesQuery } from "../../redux/nasaApi";
import MediaCard from "../MediaCard/MediaCard";
import { CircularProgress, Box } from "@mui/material";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function SearchPage() {
  const query = useSelector((state) => state.search.q);
  const extraFilters = useSelector((state)=> state.search.extraFilters)
  const { data, isFetching } = useGetImagesQuery({query,extraFilters}, { skip: !query });

  return isFetching ? (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <CircularProgress size={60} thickness={4} sx={{ color: "primary.main" }} />
    </Box>
  ) : (
    data && (
      <ResponsiveMasonry columnsCountBreakPoints={{ 300: 1, 500: 3, 700: 4, 900: 5 }}>
        <Masonry key={data?.collection.items.length} gutter="10px">
          {data?.collection.items.map((item, index) => (
            <MediaCard key={index} image={item} />
          ))}
        </Masonry>
      </ResponsiveMasonry>
    )
  );
}

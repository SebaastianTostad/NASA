import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nasaApi = createApi({
  reducerPath: "nasaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://images-api.nasa.gov",
  }),
  tagTypes: [""],

  endpoints: (builder) => ({
    //Queries
    getImages: builder.query({
      query: (query) => {
        return `search?q=${query}&media_type=image`;
      },
      providesTags: ["Images"],
    }),
  }),
});

export const { useLazyGetMetadataQuery, useGetImagesQuery } = nasaApi;

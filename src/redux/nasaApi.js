import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nasaApi = createApi({
  reducerPath: "nasaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://images-api.nasa.gov",
  }),
  tagTypes: [""],

  endpoints: (builder) => ({
    //Queries
    getMetadata: builder.query({
      query: (nasa_id) => {
        return `metadata/${nasa_id}`;
      },
      providesTags: ["Metadata"],
    }),
    getImages: builder.query({
      query: (nasa_id) => {
        return `search?q=a&description=moon%20landing`;
      },
      providesTags: ["Images"],
    }),
  }),
});

export const { useLazyGetMetadataQuery, useGetImagesQuery } = nasaApi;

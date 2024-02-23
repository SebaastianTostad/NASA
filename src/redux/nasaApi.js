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
      query: (payload) => {
        const queryString = Object.keys(payload.extraFilters)
        .filter((key) => payload.extraFilters[key] !== null && payload.extraFilters[key] !== "")
        .map((key) => `${key}=${payload.extraFilters[key]}`)
        .join("&");
        return `search?q=${payload.query}&media_type=image&${queryString}`;
      },
      providesTags: ["Images"],
    }),
  }),
});

export const { useLazyGetMetadataQuery, useGetImagesQuery } = nasaApi;

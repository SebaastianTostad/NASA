import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const nasaApi = createApi({
  reducerPath: 'nasaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "https://images-api.nasa.gov",
  }),
  tagTypes: [''],

  endpoints: (builder) => ({
    //Queries
    getMetadata: builder.query({
      query: (nasa_id) => {
        return `metadata/${nasa_id}/`
      },
      providesTags: ['Metadata'],
    }),
    getImages: builder.query({
        query: (nasa_id) => {
          return `search`
        },
        providesTags: ['Images'],
      }),
  })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useControlAreaLightsMutation,
  useGetPowerLevelQuery
} = nasaApi
import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const carouselAdapter = createEntityAdapter();

const initialState = carouselAdapter.getInitialState({});

export const carouselApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCarouselContent: builder.query({
      query: (args) => ({
        url: `/carousel`,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        const loaded = responseData.carouselContent;

        initialState.count = responseData.count;
        return carouselAdapter.setAll(initialState, loaded);
      },
      providesTags: (result, error, arg) => [
        { type: "Carousel", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Carousel", id })),
      ],
    }),
  }),
});

export const { useGetCarouselContentQuery } = carouselApiSlice;
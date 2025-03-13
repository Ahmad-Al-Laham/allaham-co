import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const brandsAdapter = createEntityAdapter();

const initialState = brandsAdapter.getInitialState({
  count: "",
});

export const brandsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActiveBrands: builder.query({
      query: (args) => ({
        url: `/${
          args?.searchTerm ? `brand/search/${args.searchTerm}` : "brand-active"
        }?page=${args?.page ? args.page : ""}&limit=${
          args?.limit ? args.limit : ""
        } `,
        method:"GET",
      }),
      transformResponse: (responseData) => {
        const loaded = responseData.brand;
        initialState.count = responseData.totalCount;
        return brandsAdapter.setAll(initialState, loaded);
      },
      providesTags: (result, error, arg) => [
        { type: "Brands", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Brands", id })),
      ],
    }),
  }),
});

export const { useGetActiveBrandsQuery, useLazyGetActiveBrandsQuery } =
  brandsApiSlice;

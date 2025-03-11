import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const categoriesAdapter = createEntityAdapter();

const initialState = categoriesAdapter.getInitialState({
  count: "",
  normalData: [],
});

export const categoriesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActiveCategories: builder.query({
      query: (args) => ({
        url: `/${
          args?.searchTerm
            ? `category/search/${args.searchTerm}`
            : "category-active"
        }?page=${args?.page ? args.page : ""}&limit=${
          args?.limit ? args.limit : ""
        } `,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        const loaded = responseData.category;
        initialState.count = loaded.length;
        initialState.normalData = loaded;
        return categoriesAdapter.setAll(initialState, loaded);
      },
      providesTags: (result, error, arg) => [
        { type: "Categories", id: "LIST" },
        ...result.ids.map((id) => ({ type: "Categories", id })),
      ],
    }),
  }),
});

export const { useGetActiveCategoriesQuery, useLazyGetActiveCategoriesQuery } =
  categoriesApiSlice;

import { createEntityAdapter } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const texturesAdapter = createEntityAdapter();

const initialState = texturesAdapter.getInitialState({
  count: "",
  normalData: [],
});

export const texturesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getActiveTexture: builder.query({
      query: (args) => ({
        url: `/${
          args?.searchTerm
            ? `texture/search/${args.searchTerm}`
            : "texture-active"
        }?page=${args?.page ? args.page : ""}&limit=${
          args?.limit ? args.limit : ""
        } `,
        method: "GET",
      }),
      transformResponse: (responseData) => {
        const loaded = responseData.texture;
        initialState.count = loaded.length;
        initialState.normalData = loaded;
        return texturesAdapter.setAll(initialState, loaded);
      },
      providesTags: (result, error, arg) => [
        { type: "textures", id: "LIST" },
        ...result.ids.map((id) => ({ type: "textures", id })),
      ],
    }),
  }),
});

export const { useGetActiveTextureQuery, useLazyGetActiveTextureQuery } =
texturesApiSlice;

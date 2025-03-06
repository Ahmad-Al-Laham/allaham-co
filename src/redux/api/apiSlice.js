import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "../../constants";
export const apiSlice = createApi({
  reducerPath: "api", // optional
  baseQuery: fetchBaseQuery({ baseUrl: API_BASE_URL }),
  tagTypes: [
    "Feedback",
    "Carousel",
    "Staff",
    "Training",
    "Trainee",
    "Content",
    "Categories",
    "Badges",
  ],
  endpoints: (builder) => ({}),
});

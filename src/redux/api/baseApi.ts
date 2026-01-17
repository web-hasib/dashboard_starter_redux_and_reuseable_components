import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.accessToken;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
    // Treat 308 as success
    validateStatus: (response, result) => {
      if (response.status === 308 && result?.success) return true;
      return response.status >= 200 && response.status < 400;
    },
  }),
  endpoints: () => ({}),
  tagTypes: ["Admin","User","Statistic","Application","Provider"],
});


import { AdminDashboardResponse } from "@/src/types/userTypes/userTypes";
import { baseApi } from "../baseApi";

export const userApi = baseApi.injectEndpoints({
  overrideExisting: true, // ✅ add this
  endpoints: (builder) => ({
    // get all statistics
    getStatistic: builder.query<AdminDashboardResponse, void>({
      query: () => ({
        url: `/dashboard/overview`,
        method: "GET",
      }),
      providesTags: ["Statistic"],
    }),
  
  }),
});

export const { useGetStatisticQuery  } = userApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userOrderApi = createApi({
  reducerPath: "userOrderApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7141/api/",
  }),
  tagTypes: ["UserOrderItems"],
  endpoints: (builder) => ({
    //Get user Orders
    getAllUserOrders: builder.query({
      query: ({ pageNumber, pageSize }) => ({
        url: "UserOrders",
        params: {
          pageNumber,
          pageSize,
        },
      }),
      transformResponse(apiResponse: { Result: any }, meta: any) {
        return {
          apiResponse,
          totalRecords: meta.response.headers.get("X-Pagination"),
        };
      },
      providesTags: ["UserOrderItems"],
    }),
  }),
});

export const { useGetAllUserOrdersQuery } = userOrderApi;
export default userOrderApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const commnetsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://localhost:7141/api/",
  }),
  tagTypes: ["CommentItems"],
  endpoints: (builder) => ({
    //get paged userComments
    getPagedComments: builder.query({
      query: ({ pageNumber, pageSize }) => ({
        url: "Comments/paged",
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
      providesTags: ["CommentItems"],
    }),
  }),
});

export const { useGetPagedCommentsQuery } = commnetsApi;
export default commnetsApi;

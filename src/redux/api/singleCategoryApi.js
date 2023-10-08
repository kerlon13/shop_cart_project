import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const singleCategoryApi = createApi({
    reducerPath: "singleCategoryApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/category/" }),
    tagTypes: ["Category"],
    endpoints: (builder) => ({
      getSingleCategory: builder.query({
        query: (category) => `${category}`,
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: "Category", id })),
                { type: "Category", id: "LIST" },
              ]
            : [{ type: "Category", id: "LIST" }],
      }),
    }),
  });


export const {useGetSingleCategoryQuery} = singleCategoryApi;
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/" }),
    tagTypes: ["Categories"],
    endpoints: (builder) => ({
      getCategories: builder.query({
        query: () => `categories`,
        providesTags: (result) =>
          result
            ? [
                ...result.map(({ id }) => ({ type: "Categories", id })),
                { type: "Categories", id: "LIST" },
              ]
            : [{ type: "Categories", id: "LIST" }],
      }),
    }),
  });


export const {useGetCategoriesQuery} = categoriesApi;
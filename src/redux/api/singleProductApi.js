import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const singleProductApi = createApi({
    reducerPath: "singleProductApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/products/" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
      getSingleProduct: builder.query({
        query: (id) => `${id}`,
      }),
    }),
  });


export const {useGetSingleProductQuery} = singleProductApi;
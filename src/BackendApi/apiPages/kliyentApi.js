import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://director-2b91ca120c35.herokuapp.com";
export const kliyentApi = createApi({
  reducerPath: "kliyentlarApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    kliyent: builder.query({
      query: () => ({
        url: "/main/",
        method: "POST",
        body: {
          method: "get_clent",
          params: {},
        },
        headers: {
          Authorization: "Bearer 516abb367905849725104e19556e60c7eec48cee",
        },
      }),
    }),
    addKliyent: builder.mutation({
      query: (clent) => ({
        url: "/add_clent",
        method: "POST",
        body: clent,
      }),
    }),
    // updateDokonlar: builder.mutation({
    //     query: ({ id, ...rest }) => ({
    //         url: /update_dokon/${id},
    //         method: "PUT",
    //         body: rest,
    //     }),
    // }),
    // deleteDokonlar: builder.mutation({
    //     query: (id) => ({
    //         url: /delete_dokon/${id},
    //         method: "DELETE",
    //     }),
    // }),
  }),
});
export const {
  useKliyentQuery,
  useAddKliyentMutation,
  // useUpdateDokonlarMutation,
  // useDeleteDokonlarMutation,
} = kliyentApi;

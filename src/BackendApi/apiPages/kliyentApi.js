import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
  
  export const kliyentApi = createApi({
    reducerPath: "kliyentApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://director-2b91ca120c35.herokuapp.com/main/"
    }),
    endpoints: (builder) => ({
        kliyentlar: builder.query({
          query: () => "/get_clent"
        }),
        addKliyent: builder.mutation({
          query: (task) => ({
            url: "/add_clent",
            method: "POST",
            body: task
          })
        }),
        updateKliyent: builder.mutation({
          query: ({ id, ...rest }) => ({
            url: `/update_clent/${id}`,
            method: "PUT",
            body: rest
          })
        }),
        deleteKliyent: builder.mutation({
          query: (id) => ({
            url: `/delete_clent/${id}`,
            method: "DELETE"
          })
        })
      })
  });

  export const {
    useKliyentlarQuery,
    useAddKliyentMutation,
    useUpdateKliyentMutation,
    useDeleteKliyentMutation
  } = kliyentApi;
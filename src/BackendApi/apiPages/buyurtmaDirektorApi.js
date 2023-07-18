import {
    createApi,
    fetchBaseQuery
  } from "@reduxjs/toolkit/query/react";
  
  export const buyurtmaDirektorApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://director-2b91ca120c35.herokuapp.com/main/"
    }),
    endpoints: (builder) => ({
        buyurtmalar: builder.query({
          query: () => "/tasks"
        }),
        addBuyurtmalar: builder.mutation({
          query: (task) => ({
            url: "/buyurtmalar",
            method: "POST",
            body: task
          })
        }),
        updateBuyurtmalar: builder.mutation({
          query: ({ id, ...rest }) => ({
            url: `/buyurtmalar/${id}`,
            method: "PUT",
            body: rest
          })
        }),
        deleteBuyurtmalar: builder.mutation({
          query: (id) => ({
            url: `/buyurtmalar/${id}`,
            method: "DELETE"
          })
        })
      })
  });

  export const {
    useBuyurtmalarQuery,
    useAddBuyurtmalarMutation,
    useUpdateBuyurtmalarMutation,
    useDeleteBuyurtmalarMutation
  } = buyurtmaDirektorApi;
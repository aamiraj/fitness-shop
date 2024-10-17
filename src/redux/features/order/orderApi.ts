import { baseApi } from "../../api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addNewOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useAddNewOrderMutation } = orderApi;

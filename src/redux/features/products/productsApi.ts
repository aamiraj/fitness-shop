import { baseApi } from "../../api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (data) => ({
        url: "/products",
        method: "POST",
        body: data,
      }),
    }),
    getSingleProduct: builder.query({
      query: () => ({
        url: "/products",
      }),
    }),
    getAllProducts: builder.query({
      query: (id) => ({
        url: `/products/:${id}`,
      }),
    }),
    editProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/products/:${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteProduct: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/products/:${id}`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const { useAddProductMutation } = productsApi;

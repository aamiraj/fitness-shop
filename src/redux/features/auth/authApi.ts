import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signUpCustomer: builder.mutation({
      query: (data) => ({
        url: "/users/create-customer",
        method: "POST",
        body: data,
      }),
    }),
    logInCustomer: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSignUpCustomerMutation, useLogInCustomerMutation } = authApi;

import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";
import { logOut, setUser } from "../features/auth/authSlice";

const fetchFunction = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL as string,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set("authorization", token);
    }

    return headers;
  },
});

const baseQueryWithAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await fetchFunction(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await fetchFunction(
      "/auth/refresh-token",
      api,
      extraOptions
    );

    const resultData = await refreshResult.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const accessToken = await (resultData as any)?.data?.accessToken;

    if (accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user: user,
          token: accessToken,
        })
      );
    } else {
      api.dispatch(logOut());
    }

    result = await fetchFunction(args, api, extraOptions);
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithAuth,
  tagTypes: ["Products"],
  endpoints: () => ({}),
});

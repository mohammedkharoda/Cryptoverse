import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Note: Change v1 to v2 on rapid api

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": import.meta.env.VITE_API_KEY,
};
const createRequest = (url: any) => ({ url, headers: cryptoApiHeaders });
export const cryptoApi = createApi({
  /**
   * The configuration object for the `createApi` function from the `@reduxjs/toolkit/query` package.
   * It specifies the `reducerPath` and `baseQuery` options.
   * @param {string} reducerPath - The name of the slice in the Redux store where the API data will be stored.
   * @param {fetchBaseQuery} baseQuery - The base query function that will be used to make API requests.
   * @returns None
   */
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }),

    // Note: To access this endpoint you need premium plan
    getExchanges: builder.query({
      query: () => createRequest("/exchanges"),
    }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;

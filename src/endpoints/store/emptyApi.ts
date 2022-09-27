import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://petstore.swagger.io/v2/" }),
  endpoints: () => ({}),
});

// eslint-disable-next-line import/prefer-default-export
export { emptySplitApi };

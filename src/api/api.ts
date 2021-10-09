import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const REDUCER_PATH = "openTdbApi";
const QUERY_BASE_URL = "https://opentdb.com/api.php";

export const openTdbApi = createApi({
  reducerPath: REDUCER_PATH,
  baseQuery: fetchBaseQuery({ baseUrl: QUERY_BASE_URL }),
  endpoints: (builder) => ({
    getCategoryQuestions: builder.query({
      query: ({ questionsAmount, categoryId, difficulty }) =>
        `?amount=${questionsAmount}&category=${categoryId}&difficulty=${difficulty}&type=boolean`,
    }),
  }),
});

export const { useGetCategoryQuestionsQuery } = openTdbApi;

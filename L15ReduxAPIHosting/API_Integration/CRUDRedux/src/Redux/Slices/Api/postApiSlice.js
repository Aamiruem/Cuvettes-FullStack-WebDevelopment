// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const postApi = createApi({
//     reducerPath: 'postApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
//     endpoints: (builder) => ({
//         getPost: builder.query({
//             url: "post",
//             method: "GET",
//             transformResponse: (response) => response.data,
//         }),
//     }),
// });

// export const { useGetPostQuery } = postApi;











import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/posts' }),
    endpoints: (builder) => ({
        getPost: builder.query({
            query: () => ({
                url: 'posts',
                method: 'GET',
            }),



            addPost: builder.mutation({
                query: (data) => ({
                    url: 'posts',
                    method: 'POST',
                    body: data,


                }),
            }),
        }),
    }),
});

export const { useGetPostQuery, useAddPostMutation } = postApi;

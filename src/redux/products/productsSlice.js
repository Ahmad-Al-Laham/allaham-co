import { createEntityAdapter } from "@reduxjs/toolkit";
import {apiSlice} from '../api/apiSlice';

const productsAdapter = createEntityAdapter();

const initialState = productsAdapter.getInitialState({
    count:"",
})

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder) => ({
        getActiveProducts: builder.mutation({
            query: (args) => ({
                url: `/${
                    args.filter
                    ? "product/filter"
                    : args.searchTerm
                    ?`product/search/${args.searchTerm}`
                    :"product-active"
                }?page=${args?.page ? args.page : ""}&limit=${
                    args?.limit ? args.limit : ""
                }` , 
                method: args.filter ? "POST" : "GET",
                body: args.filter && {
                    categoryId: args.categoryId,
                    type: args.type,
                    brandId: args.brandId,
                    textureId: args.textureId,
                
                },
            }),
            transformResponse:(responseData) =>{
                const loaded = responseData.product;
                initialState.count = responseData.totalCount;
                return productsAdapter.setAll(initialState, loaded);
            },
            providesTags:(result , error  , arg) => [
                {type: "Products" , id: "LIST"},
                ...result.ids.map((id) =>({type: "Products" , id})),
            ],
        }),
        getProductById: builder.query({
            query: (args) => `/product/${args.id}`,
            providesTags: (result , error , args) => [{type: "Product" , id: args.id}],
        }),
    })
})

export const {useGetActiveProductsMutation ,useLazyGetProductByIdQuery } = productsApiSlice;
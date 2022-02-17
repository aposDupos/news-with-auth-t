import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getById, isEmpty} from "../../utils/api";

const BASE_URL = 'http://localhost:3001/news'
const initialState = {
    news: [],
    search: ''
}

export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async (_, thunkAPI) => {
        try {
            const res = await fetch(BASE_URL)
            const data = await res.json()
            if (isEmpty(data)) {
                throw new Error('Новостей пока что нет')
            }
            thunkAPI.dispatch(setNews(data))
        } catch (e) {
            console.log(e)
        }
    }
)

export const removeOneNews = createAsyncThunk(
    'news/removeOneNews',
    async (id, thunkAPI) => {
        try {
            const res = await fetch(
                `${BASE_URL}/${id}`,
                {
                    method: "DELETE"
                }
            )
            if (res.status !== 200) {
                throw new Error('Server Error')
            }
            return id
        } catch (e) {
            console.log(e)
        }
    }
)

export const newsApprove = createAsyncThunk(
    'news/newsApprove',
    async (id, thunkAPI) => {
        try {
            const {news: {news}} = thunkAPI.getState()
            const currentNews = getById(id, news)
            const res = await fetch(
                `${BASE_URL}/${id}`,
                {
                    method: 'PUT',
                    body: JSON.stringify({...currentNews, isApproved: true}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            return id
        } catch (e) {
            console.log(e)
        }

    }
)

export const createNews = createAsyncThunk(
    'news/createNews',
    async (payload, thunkAPI) => {
        try {
            const res = await fetch(
                BASE_URL,
                {
                    method: "POST",
                    body: JSON.stringify({...payload}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
            return payload
        } catch (e) {
            console.log(e)
        }
    }
)
const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews(state, action) {
            state.news = [...action.payload]
        },
        setSearch(state, action){
            state.search =  action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(removeOneNews.fulfilled, (state, action) => {
                state.news = state.news.filter(item => {
                    if (action.payload !== item.id) {
                        return item
                    }
                })
            })
            .addCase(newsApprove.fulfilled, (state, action) => {
                state.news.forEach((item, index) => {
                    if (item.id === action.payload) state.news[index].isApproved = true
                })
            })
            .addCase(createNews.fulfilled, (state, action) => {
                const id = state.news[state.news.length-1].id + 1
                state.news.push({...action.payload, id})
            })
    }
})

export const {setNews, setSearch} = newsSlice.actions
export default newsSlice.reducer
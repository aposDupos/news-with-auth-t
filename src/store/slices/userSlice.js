import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {isEmpty} from "../../utils/api";

export const BASE_URL = 'http://localhost:3001/users'

const initialState = {
    id: null,
    login: null,
    password: null,
    name: null,
    isAdmin: null,
    error: ''
}

export const userLogin = createAsyncThunk(
    'user/userLogin',
    async ({login, password}, thunkAPI) => {
        try {
            const res = await fetch(`${BASE_URL}?login=${login}&password=${password}`)
            const data = await res.json()
            if (isEmpty(data)) {
                throw new Error('Неверный логин или пароль')
            }
            thunkAPI.dispatch(setUser(data[0]))
        } catch (e) {
            thunkAPI.dispatch(setError(e.message))
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser(state, action) {
            Object.keys(state).forEach(key => {
                state[key] = action.payload[key]
            })
        },
        removeUser(state){
            Object.keys(state).forEach(key => {
                state[key] = null
            })
        },
        setError(state, action){
           state.error = action.payload
        }
    }
})
export const {setUser, removeUser, setError} = userSlice.actions
export default userSlice.reducer
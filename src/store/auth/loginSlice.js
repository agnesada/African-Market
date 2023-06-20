import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers:{
        loginRequest: (state)=>{
            state.loading = true
            state.data = null
            state.error = null
        },
        loginSuccess: (state, action) =>{
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        loginFailure: (state, action)=>{
            state.loading = false
            state.data = null
            state.error = action.payload
        }
    }
})

export const {loginRequest, loginSuccess, loginFailure} = loginSlice.actions 

export const login = () => async(dispatch) => {
    try{
        dispatch(loginRequest())

        const {data} = await axios.post(`http://localhost:5000/api/login`)

        dispatch(loginSuccess(data.user))

    }catch(err){
        const message = err.response && err.response.data.data.message ? err.response.data.messae: err.message 
        dispatch(loginFailure(message))
    }
}


export default loginSlice.reducer 

import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const categorySlice = createSlice({
    name: 'category',
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers:{
        categoryRequest: (state)=>{
            state.loading = true
            state.data = null
            state.error = null
        },
        categorySuccess: (state, action) =>{
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        categoryFailure: (state, action)=>{
            state.loading = false
            state.data = null
            state.error = action.payload
        }
    }
})

export const {categoryRequest, categorySuccess, categoryFailure} = categorySlice.actions 

export const category = () => async(dispatch) => {
    try{
        dispatch(categoryRequest())

        const {data} = await axios.get(`http://localhost:5000/api/products/${category}`)

        dispatch(categorySuccess(data.products))

    }catch(err){
        const message = err.response && err.response.data.data.message ? err.response.data.message: err.message 
        dispatch(categoryFailure(message))
    }
}


export default categorySlice.reducer 

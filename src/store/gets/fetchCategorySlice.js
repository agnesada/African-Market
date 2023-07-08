import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
const fetchCategorySlice = createSlice({
    name: 'fetchCategory',
    initialState: {
        loading: false,
        data: null,
        error: null
    },
    reducers:{
        fetchCategoryRequest: (state)=>{
            state.loading = true
            state.data = null
            state.error = null
        },
        fetchCategorySuccess: (state, action) =>{
            state.loading = false
            state.data = action.payload
            state.error = null
        },
        fetchCategoryFailure: (state, action)=>{
            state.loading = false
            state.data = null
            state.error = action.payload
        }
    }
})

export const {fetchCategoryRequest, fetchCategorySuccess, fetchCategoryFailure} = fetchCategorySlice.actions 

export const fetchCategory = () => async(dispatch) => {
    try{
        dispatch(fetchCategoryRequest())

        const {data} = await axios.get(`http://localhost:5000/api/categories`)

        dispatch(fetchCategorySuccess(data.categories)) 

    }catch(err){
        const message = err.response && err.response.data.data.message ? err.response.data.message: err.message 
        dispatch(fetchCategoryFailure(message))
    }
}


export default fetchCategorySlice.reducer 

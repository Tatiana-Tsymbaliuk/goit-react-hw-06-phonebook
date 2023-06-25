import { configureStore } from "@reduxjs/toolkit";
import {tasksReducer} from './taskSlice'

export const store = configureStore({
        reduсer:{
                contcts: tasksReducer,
        },
})


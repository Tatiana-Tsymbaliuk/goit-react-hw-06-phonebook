import { configureStore } from "@reduxjs/toolkit";
import {tasksReducer} from './taskSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
        key: 'phonebook',
        storage,
      }

      const persistedReducer = persistReducer(persistConfig, tasksReducer) 

export const store = configureStore({
        reducer:{
                phonebook: persistedReducer,
        },
})

export const persistor = persistStore(store);


import { configureStore   } from "@reduxjs/toolkit";
import { appReducer } from "../reducer/appReducer";
export const appStore = configureStore({
    reducer: {appReducer},
    middleware: ()=>{
          return []
    },
})  
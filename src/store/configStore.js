import { configureStore } from "@reduxjs/toolkit";
import taskReduce from './tasks'
import empReducer from './employee';
import api from "./middleware/api";
import error from "./middleware/error"

const store = configureStore({ 
    reducer: {taskReduce,empReducer},
    middleware: (getDefaulatMiddleware) => [
        ...getDefaulatMiddleware(),
        api,
        error,
    ]
});

export default store; 
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as itemsReducer} from '../store/items/items.slice'

const reducers = combineReducers({
  items: itemsReducer
})

export const store = configureStore({
  reducer: reducers
})
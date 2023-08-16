import { combineReducers, createStore } from "redux";
import categoriesReducer from "./reducers/categoriesReducer";
import imagesReducer from "./reducers/imagesReducer";
import selectedCategoryReducer from "./reducers/selectedBreedReducer";


const store = createStore(combineReducers({
    categories: categoriesReducer,
    images: imagesReducer,
    selectedCategory: selectedCategoryReducer,
}))

export default store

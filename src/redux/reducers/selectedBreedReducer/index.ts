import {ICategoryAction, SET_SELECTED_CATEGORY } from "../../../types";

const initial = ''
export default function selectedCategoryReducer(state: string = initial, action: ICategoryAction) {
    switch (action.type) {
        case SET_SELECTED_CATEGORY:{
            return action.payload
        }
        default:
            return state
    }

}

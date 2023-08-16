import {
    ICategory, ICategoryAction,
    SET_CATEGORIES,
} from "../../../types";

const initial:ICategory[] = []
export default function categoriesReducer(state: ICategory[]  = initial, action: ICategoryAction) {
    switch (action.type) {
        case SET_CATEGORIES: {
            return [...action.payload]
        }
        default:
            return state
    }

}

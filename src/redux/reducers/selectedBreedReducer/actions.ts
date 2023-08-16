import {Dispatch} from "react";
import {SET_SELECTED_CATEGORY} from "../../../types";
interface ICategoryDispatch {
    type:string,
    payload:string
}

export const setSelectedCategory = (dispatch:Dispatch<ICategoryDispatch>, payload:string) => {
    dispatch({type:SET_SELECTED_CATEGORY, payload})
}

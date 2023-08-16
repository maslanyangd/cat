import {Dispatch} from "react";
import { ICategory, SET_CATEGORIES } from "../../../types";

interface ICategoryDispatch {
    type:string
    payload:ICategory[]
}

export const setCategoriesRedux = (dispatch:Dispatch<ICategoryDispatch>, payload:ICategory[]) => {
    dispatch({type:SET_CATEGORIES,payload})
}
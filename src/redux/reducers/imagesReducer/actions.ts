import {Dispatch} from "react";
import {IImage, LOAD_MORE_IMAGES, SET_IMAGES} from "../../../types";

interface IImageDispatch {
    type:string
    payload:IImage[]
}

export const setImagesRedux = (dispatch:Dispatch<IImageDispatch>,payload:IImage[]) => {
    dispatch({type:SET_IMAGES,payload})
}

export const loadMoreImages = (dispatch:Dispatch<IImageDispatch>,payload:IImage[]) => {
    dispatch({type:LOAD_MORE_IMAGES,payload})
}


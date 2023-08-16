export type IImage = {
    id:string,
    url:string,
    weight:number,
    height:number
}

export type ICategory = {
    name:string,
    id:string
}

export type ICategoryAction = {
    type:string,
    payload:ICategory[]
}
export type IImageAction = {
    type:string,
    payload:IImage[]
}


export const SET_SELECTED_CATEGORY = 'SET_SELECTED_CATEGORY'
export const SET_IMAGES = 'SET_IMAGES'

export const LOAD_MORE_IMAGES = 'LOAD_MORE_IMAGES'
export const SET_CATEGORIES = 'SET_CATEGORIES'

export const URL = 'https://api.thecatapi.com/v1/images/search?limit=10'

import {
    IImage,
    IImageAction,
    LOAD_MORE_IMAGES,
    SET_IMAGES,
} from "../../../types";

const initial:IImage[] = []
export default function imagesReducer(state: IImage[]  = initial, action: IImageAction) {
    switch (action.type) {
        case SET_IMAGES: {
            return [...action.payload]
        }
        case LOAD_MORE_IMAGES: {
            return [...state,...action.payload]
        }
        default:
            return state
    }

}

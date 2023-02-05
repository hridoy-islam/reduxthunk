import { FIRST_UPLOAD, LAST_UPLOAD, POSTS_BY_TAG } from "../actionTypes/actionTypes"

export const lastUploadAction = () => {
    return {
        type: LAST_UPLOAD,
    }
}


export const firstUploadAction = () => {
    return {
        type: FIRST_UPLOAD,
    }
}

export const postsByTag = (tag) => {
    return {
        type: POSTS_BY_TAG,
        payload: tag,
    }
}
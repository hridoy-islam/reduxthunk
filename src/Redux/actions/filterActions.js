import { FIRST_UPLOAD, LAST_UPLOAD } from "../actionTypes/actionTypes"

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
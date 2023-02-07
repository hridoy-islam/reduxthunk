import { FIRST_UPLOAD, LAST_UPLOAD, POSTS_BY_TAG } from "../actionTypes/actionTypes";

const initalState = {
    filters: {
        lastUpload: false,
        firstUpload: false,
        tag: '',
    }
}


const filterReducer = (state = initalState, action) => {
    switch (action.type) {
        case FIRST_UPLOAD:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    firstUpload: !state.filters.firstUpload,
                }
            }
        case LAST_UPLOAD:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    lastUpload: !state.filters.lastUpload,
                }
            }
        case POSTS_BY_TAG:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    tag: action.payload
                }
            }

        default:
            return state;
    }
}

export default filterReducer;
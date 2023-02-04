import { FIRST_UPLOAD, LAST_UPLOAD } from "../actionTypes/actionTypes";

const initalState = {
    filters: {
        lastUpload: false,
        firstUpload: false,
    }
}


const filterReducer = (state = initalState, action) => {
    switch (action.type) {
        case FIRST_UPLOAD:
            return {
                ...state,
                filters: {
                    ...state.filters,
                    
                }
            }
        case LAST_UPLOAD:
            return {

            }

        default:
            return state;
    }
}

export default filterReducer;
import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, READING_COUNT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initalState = {
    posts: [],
}


const postReducer = (state = initalState, action) => {

    switch (action.type) {
        case GET_CONTENT:
            return {
                ...state,
                posts: action.payload,
            }
        case ADD_CONTENT:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            }
        case DELETE_CONTENT:
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload)
            }
        case UPDATE_CONTENT:
            return {
                ...state,
                posts: [...state.posts],
            }
        case READING_COUNT:
            
            const newData = state.posts.map((post) => {
                
                if(post._id ===action.payload._id) {
                    if(post.reading > 0){
                        let count = post.reading;
                        count += 1;
                        
                        return {
                            ...post, 
                            reading : count}
                    }
                    return {...post, reading : 1}
                }
                return {...post, reading : 0}
            }
            
            )
            
            return {
                posts: [...newData],
            }



        default:
            return state;
    }

}

export default postReducer;
import { ADD_CONTENT, DELETE_CONTENT,  GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes";

const initalState = {
    posts: [],
}


const postReducer = (state = initalState, action) => {
    switch (action.type) {
        case GET_CONTENT:
            return{
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
        default:
            return state;
    }
    
}

export default postReducer;
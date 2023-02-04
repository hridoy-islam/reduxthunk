import { ADD_CONTENT, DELETE_CONTENT, GET_CONTENT, UPDATE_CONTENT } from "../actionTypes/actionTypes"

export const fetchPostAction = (posts)=> {
    return {
        type: GET_CONTENT,
        payload: posts,
    }
}

export const deletePostAction = (id) => {
    return {
        type: DELETE_CONTENT,
        payload: id,
    }
}

export const addContent = (post) => {
    return {
        type: ADD_CONTENT,
        payload: post,
    }
}

export const updatePostAction = (post) => {
    return {
        type: UPDATE_CONTENT,
        payload: post,
    }
}
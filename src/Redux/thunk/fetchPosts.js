import { fetchPostAction } from "../actions/postActions";

const fetchPosts = () => {
    return async(dispatch, getState) => {
        const res = await fetch('http://localhost:5000/posts')
        const data = await res.json();
        dispatch(fetchPostAction(data))
    }
}

export default fetchPosts;
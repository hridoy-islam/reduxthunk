import { fetchPostAction } from "../actions/postActions";

const fetchPosts = () => {
    return async(dispatch, getState) => {
        const res = await fetch(`${process.env.REACT_APP_API}/posts`)
        const data = await res.json();
        dispatch(fetchPostAction(data))
    }
}

export default fetchPosts;
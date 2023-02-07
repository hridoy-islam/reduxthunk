
import { addContent } from "../actions/postActions";

const addPost = (post) => {
    
    return async(dispatch, getState) => {
        const res = await fetch(`${process.env.REACT_APP_API}/post`, {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        if(data.acknowledged){
            dispatch(addContent({
                _id: data.insertedId,
                ...post,
            }))
        }
    }
}

export default addPost;
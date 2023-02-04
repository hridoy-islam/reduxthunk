
import { addContent } from "../actions/postActions";

const addPost = (post) => {
    
    return async(dispatch, getState) => {
        const res = await fetch('http://localhost:5000/post', {
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
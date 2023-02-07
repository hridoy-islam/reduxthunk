import { deletePostAction } from "../actions/postActions";

const deletePost = (id) => {
    return async(dispatch, getState) => {
        const res = await fetch(`${process.env.REACT_APP_API}/post/${id}`, {
            method: "DELETE",
        })
        const data = await res.json();
        console.log(data)

        if(data.acknowledged){
            dispatch(deletePostAction(id))
        }
    }
}

export default deletePost;
import { updatePostAction } from "../actions/postActions";

const updatePost = (post) => {

    return async(dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/post/${post._id}`, {
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        if(data.acknowledged){
            dispatch(updatePostAction(post))
        }
    }
}

export default updatePost;


// Clean The website and Updated Security 3
// Restore From Backup 2
// Update All Plugins and Themes 2
// Fix Godaddy Issues 1
// Website Images Fix 1
// Landing Page Design 6
// Donation Form 1
// Migrate to Siteground 5

import { updatePostAction } from "../actions/postActions";

const updatePost = (post) => {

    return async(dispatch, getState) => {
        
        const res = await fetch(`${process.env.REACT_APP_API}/post/${post._id}`, {
            method: 'PATCH',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        const data = await res.json();
        if(data.acknowledged){
            dispatch(updatePostAction(post))
            console.log(data);
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

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { firstUploadAction, lastUploadAction } from '../Redux/actions/filterActions';
import fetchPosts from '../Redux/thunk/fetchPosts';
import Post from './Post';

const PostsCard = () => {
    const posts = useSelector(state => state.post.posts)
    const filters = useSelector(state => state.filter.filters)
    const { firstUpload, lastUpload } = filters;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);
    let content

    if (posts.length && (firstUpload || lastUpload)) {
        if (firstUpload) {
            content = posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).map(post =>
                <>
                    <Post key={post._id} post={post} />
                </>
            )
        }
        if (lastUpload) {
            content = posts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map(post =>
                <>
                    <Post key={post._id} post={post} />
                </>
            )
        }
    }
    
    if (posts.length) {
        content = posts.map(post =>
            <>
                <Post key={post._id} post={post} />
            </>
        )
    }



    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-end justify-between">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Blogs</h2>
                    </div>
                    
                    <div className="hidden lg:flex lg:items-center lg:space-x-3">
                        <button type="button" onClick={() => dispatch(firstUploadAction())} className={`px-4 py-2 duration-200 bg-transparent border border-gray-300  hover:bg-blue-600 hover:text-white ${firstUpload ? 'bg-blue-600 focus:text-white' : ''}`}>
                            First upload
                        </button>

                        <button type="button" onClick={() => dispatch(lastUploadAction())} className={`px-4 py-2 duration-200 bg-transparent border border-gray-300  hover:bg-blue-600 hover:text-white ${lastUpload ? 'bg-blue-600 focus:text-white' : ''}`}>
                            Last upload
                        </button>
                    </div>
                </div>

                <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                    {content}
                </div>

                <div className="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                    <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button type="button" className="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PostsCard;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import fetchPosts from '../Redux/thunk/fetchPosts';

const SinglePost = () => {
    const dispatch = useDispatch()
    useEffect(()=> {
        fetchPosts();
    }, [dispatch]);
    const {id} = useParams();
    const post = useSelector(state => state.posts.find(post => post._id === id))
    
    
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <img className="object-cover w-16 h-16" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
            <h1 className="mt-5 text-2xl font-semibold">{post.title}</h1>
            <p className="mt-4 text-base text-gray-600">{post.description}</p>
            <p className="mt-4 text-base text-gray-600">Tags: {post.tags.map(tag => <span key={tag}>{tag}</span>)}</p>
            <button className='inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700'><Link to='/'> Back to Home </Link></button>
        </div>
        </section>
    );
};

export default SinglePost;
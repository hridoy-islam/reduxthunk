import moment from 'moment';
import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <div className="overflow-hidden bg-white rounded shadow">
            <div className="p-5">
                <div className="relative">
                    <Link to={`posts/${post._id}`} title="" className="block aspect-w-4 aspect-h-3">
                        <img className="object-cover w-full h-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/blog/2/blog-post-1.jpg" alt="" />
                    </Link>

                    <div className="absolute top-4 left-4">
                        {post.tags.map(tag => <span className="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full">{tag} </span>)}
                    </div>
                </div>
                <span className="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"> {moment(post.createdAt).format('MMMM Do YYYY h:mm:ss a')} </span>
                <p className="mt-5 text-2xl font-semibold">
                    <Link to={`posts/${post._id}`} title="" className="text-black"> {post.title}</Link>
                </p>
                <p className="mt-4 text-base text-gray-600">{post.description}</p>
                <Link to={`posts/${post._id}`} title="" className="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                    Read More
                </Link>
            </div>
        </div>
    );
};

export default Post;
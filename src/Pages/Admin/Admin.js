import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import deletePost from '../../Redux/thunk/deletePost';
import fetchPosts from '../../Redux/thunk/fetchPosts';

const Admin = () => {
    const posts = useSelector(state => state.posts)
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(fetchPosts())
    },[dispatch]);
    return (
        <div className='overflow-hidden'>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b">
                                    <tr>
                                         
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Title
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Description
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Tags
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Edit
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Delete
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {posts.map(post => 
                                    <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {post.title}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {post.description}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            {post.tags.map(tag => <span>{tag},</span>)}
                                        </td>
                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <Link to={`/dashboard/editpost/${post._id}`}><button className='p-2 border-2 border-black'>Edit</button></Link>
                                        </td>
                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                        <button className='p-2 border-2 bg-red-500 text-white' onClick={()=> dispatch(deletePost(post._id))}> Delete</button>
                                        </td>
                                    </tr>
                                     )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
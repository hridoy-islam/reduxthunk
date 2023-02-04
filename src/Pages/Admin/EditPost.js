import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {useParams } from 'react-router-dom';
import fetchPosts from '../../Redux/thunk/fetchPosts';
import updatePost from '../../Redux/thunk/updatePost';

const EditPost = () => {
    
    const { register, handleSubmit } = useForm();
    const {id} = useParams();
    const dispatch = useDispatch()
    
    useEffect(()=> {
        dispatch(fetchPosts())
    }, [dispatch]);

    const editpost = useSelector(state => state.posts.filter(post => post._id === id))
    const submit = (data) => {
        const post = {
            title: data.title,
            description: data.description,
            image: data.image,
            tags: data.tags,
            _id: id,
        };
        dispatch(updatePost(post))
    };

    return (
        <div className='flex justify-center items-center h-full '>
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <h2 className='text-3xl font-semi'>Edit Post</h2>
                <div className='flex flex-col w-full'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input type='text' className='bg-gray-200' id='title' {...register("title")} defaultValue={editpost[0].title}/>
                </div>
                <div className='flex flex-col w-full'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <textarea className='bg-gray-200' id='description' {...register("description")} defaultValue={editpost[0].description}/>
                </div>
                <div className='flex flex-col w-full '>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' name='image' className='bg-gray-200' id='image' {...register("image")} defaultValue={editpost[0].image} />
                </div>
                <div className='flex flex-col w-full'>
                    <label className='mb-2' htmlFor='tags'>
                        Select Tags
                    </label>
                    <select multiple {...register("tags")}>
                        <option selected={editpost[0].tags.includes('one')}defaultValue={'one'}>One</option>
                        <option selected={editpost[0].tags.includes('two')} defaultValue={'two'}>two</option>
                        <option selected={editpost[0].tags.includes('Three')}defaultValue={'Three'}>Three</option>
                        <option selected={editpost[0].tags.includes('Four')}defaultValue={'Four'}>Four</option>
                        <option selected={editpost[0].tags.includes('Five')}defaultValue={'Five'}>Five</option>
                    </select>
                </div>
                
                

                <div className='flex justify-between items-center w-full'>
                    <button
                        className=' px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500'
                        type='submit'
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditPost;
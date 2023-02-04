import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import addPost from '../../Redux/thunk/addPost';

const AddPost = () => {
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const submit = (data) => {
        const post = {
            title: data.title,
            description: data.description,
            image: data.image,
            tags: data.tags,
        };
        dispatch(addPost(post))
        
    };


    return (
        <div className='flex justify-center items-center h-full '>
            
            <form
                className='shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white'
                onSubmit={handleSubmit(submit)}
            >
                <h2 className='text-3xl font-semi'>Add New Post</h2>
                <div className='flex flex-col w-full'>
                    <label className='mb-2' htmlFor='title'>
                        Title
                    </label>
                    <input type='text' className='bg-gray-200' id='title' {...register("title")} />
                </div>
                <div className='flex flex-col w-full'>
                    <label className='mb-2' htmlFor='description'>
                        Description
                    </label>
                    <textarea className='bg-gray-200' id='description' {...register("description")} />
                </div>
                <div className='flex flex-col w-full '>
                    <label className='mb-2' htmlFor='image'>
                        Image
                    </label>
                    <input type='text' name='image' className='bg-gray-200' id='image' {...register("image")} />
                </div>
                <div className='flex flex-col w-full '>
                    <label className='mb-2' htmlFor='tags'>
                        Select Tags
                    </label>
                    <select multiple {...register("tags")} >
                        <option value={'one'}>One</option>
                        <option value={'two'}>two</option>
                        <option value={'Three'}>Three</option>
                        <option value={'Four'}>Four</option>
                        <option value={'Five'}>Five</option>
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

export default AddPost;
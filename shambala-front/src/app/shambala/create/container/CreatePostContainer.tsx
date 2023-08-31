"use client";
import React from 'react';
import PropTypes from 'prop-types';
import CreatePost from '../view/CreatePost';
import { PostDTO, createPost } from '@pages/serverActions/posts';

const CreatePostContainer = () => {

    const onCreatePost = async (post: PostDTO) => {
        console.log("hellloo");
        await createPost(post);

    }


    return (
        <div>
            <CreatePost onCreate={onCreatePost}/>
        </div>
    );
};


export default CreatePostContainer;
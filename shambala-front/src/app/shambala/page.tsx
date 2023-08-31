"use client";

import React, { useEffect, useState } from "react";
import AppMainView from "./view";
import {
  doLikePost,
  getPostDetails,
  getPosts,
} from "@pages/serverActions/posts";
import { Post } from "@domain/models/post";

const Home = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const onGettingPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    onGettingPosts();
  }, []);

  const onLike = async (postId: string) => {
    await doLikePost(postId);
    const newPost = await getPostDetails(postId);
    const updatedPosts = posts.map((post) => {
      if (post.id === newPost.id) {
        return newPost;
      }
      return post;
    });

    console.log("NEW POST ", newPost);
    setPosts(updatedPosts);
  };

  const onDelete = (postId: string) => {};

  return <AppMainView posts={posts} onLike={onLike} onDelete={onDelete} />;
};

export default Home;

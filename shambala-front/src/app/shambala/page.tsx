"use client";

import React, { useEffect, useState } from "react";
import AppMainView from "./view";
import { getPosts } from "@pages/serverActions/posts";
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

  return <AppMainView posts={posts} />;
};

export default Home;

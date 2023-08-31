"use client";

import HomeView from "./home";
import { Post } from "@domain/models/post";
import { useEffect, useState } from "react";

const basePost: Post = {
  author: {
    username: "Miguel Romero",
  },
  description: "A normal and random post",
  id: "1",
  slug: {
    current: "1",
  },
  createdAt: new Date(),
  title: "A shadow under the new day",
  image: {
    alt: "Image",
    src: "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
  },
};

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const newPosts: Post[] = [];
    for (let i = 0; i < 10; i++) {
      newPosts.push({ ...basePost, id: i.toString() });
    }
    setPosts(newPosts);
  }, []);

  return <HomeView posts={posts} />;
};

export default HomePage;

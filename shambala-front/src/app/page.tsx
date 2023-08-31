"use client";

import HomeView from "./home";
import { useRouter } from "next/navigation";
import { Post } from "@domain/models/post";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { getPosts } from "./serverActions/posts";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    const onGettingPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    onGettingPosts();
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <HomeView posts={posts} />
    </Suspense>
  );
};

export default HomePage;

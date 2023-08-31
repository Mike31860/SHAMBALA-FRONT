"use client";

import HomeView from "./home";
import { auth } from "@infrastructure/lib/firebase-config";
import { signOut as firebaseSignOut } from "firebase/auth";
import { appLogout } from "./serverActions/auth";
import { useRouter } from "next/navigation";
import { Post } from "@domain/models/post";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";
import { getPosts } from "./serverActions/posts";

const HomePage = () => {
  const router = useRouter();

  const signOut = async () => {
    console.log;
    await firebaseSignOut(auth);
    const response = await appLogout();
    if (response.status === 200) {
      router.push("/login");
    }
  };

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

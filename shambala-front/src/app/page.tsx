"use client";

import HomeView from "./home";
import { auth } from "@infrastructure/lib/firebase-config";
import { signOut as firebaseSignOut } from "firebase/auth";
import { appLogout } from "./serverActions/auth";
import { useRouter } from "next/navigation";
import { Post } from "@domain/models/post";
import { Suspense, useEffect, useState } from "react";
import Loading from "./loading";

interface ApiPost {
  id: string;
  owner: string;
  title: string;
  description: string;
  likesCount?: string;
  commentsCount?: string;
}

const mapApiPosts = (post: ApiPost): Post => {
  return {
    author: {
      username: post.owner,
    },
    createdAt: new Date(),
    id: post.id,
    title: post.title,
    description: post.description,
    slug: {
      current: "",
    },
  };
};

const getPosts = async () => {
  // const basePost: Post = {
  //   id: "1",
  //   description: "Post's description...",
  //   author: {
  //     username: "MIguel Torres",
  //   },
  //   title: "Post 1",
  //   slug: {
  //     current: "",
  //   },
  //   createdAt: new Date(),
  // };
  // const posts: Post[] = [];

  // for (let i = 0; i < 20; i++) {
  //   posts.push({
  //     ...basePost,
  //     id: i.toString(),
  //   });
  // }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/posts`
    );
    const rawPosts = await response.json();
    console.log("raw posts ", rawPosts);
    const posts = rawPosts.map(mapApiPosts);
    return posts;
  } catch (error) {
    console.log("FETCH ERROR ", error);
  }
};

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

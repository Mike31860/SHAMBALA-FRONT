"use client";

import PostItem from "@components/organisms/PostItem";
import { Comment, Post } from "@domain/models/post";
import { baseComment, basePost } from "@pages/serverActions/posts";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useMemo, Suspense } from "react";
import PostDetails from "./view";

const getPostDetail = async (postSlug: string): Promise<Post> => {
  const comments: Comment[] = [];

  for (let i = 0; i < 100; i++) {
    comments.push({
      ...baseComment,
      id: i.toString(),
    });
  }
  return { ...basePost, comments };
};

const PostDetailsPage = () => {
  const { slug } = useParams();

  const postSlug: string = useMemo(() => slug as string, [slug]);

  console.log("post slug", postSlug);
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    getPostDetail(postSlug).then(setPost);
  }, []);

  return (
    <Suspense fallback={<p>loading...</p>}>
      <PostDetails post={post} />
    </Suspense>
  );
};

export default PostDetailsPage;

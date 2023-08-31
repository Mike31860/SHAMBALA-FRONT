"use client";

import PostItem from "@components/organisms/PostItem";
import { Comment, Post } from "@domain/models/post";
import { doLikePost, getPostDetails } from "@pages/serverActions/posts";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import React, { useState, useEffect, useMemo, Suspense } from "react";
import PostDetails from "./view";
import { commentPost } from "@pages/serverActions/comments";

const PostDetailsPage = () => {
  const { slug } = useParams();

  const postSlug: string = useMemo(() => slug as string, [slug]);

  const [post, setPost] = useState<Post>();

  useEffect(() => {
    if (postSlug) {
      getPostDetails(postSlug).then(setPost);
    }
  }, [postSlug]);

  const onCommentPost = async (comment: string) => {
    await commentPost(post.id, comment.trim());
    getPostDetails(postSlug).then(setPost);
  };

  const onLikePost = async () => {
    console.log("ON LIKE");
    await doLikePost(post.id);
    getPostDetails(postSlug).then(setPost);
  };

  const onDeletePost = async () => {};

  return (
    <Suspense fallback={<p>loading...</p>}>
      <PostDetails
        post={post}
        onComment={onCommentPost}
        onLike={onLikePost}
        onDelete={onDeletePost}
      />
    </Suspense>
  );
};

export default PostDetailsPage;

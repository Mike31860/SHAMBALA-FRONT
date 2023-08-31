"use client";

import CommentList from "@components/organisms/CommentList";
import PostItem from "@components/organisms/PostItem";
import { Post } from "@domain/models/post";
import React from "react";

interface PostDetailsProps {
  post: Post;
}

const PostDetails: React.FC<PostDetailsProps> = ({ post }) => {
  if (!post) {
    return;
  }
  return (
    <div className="pl-10 pr-10">
      <PostItem post={post} hover={false} />
      <div className="mt-4 w-100 border-t-2 border-dashed border-gray-500">
        <div className="mt-2 w-100 h-fit">
          {post.comments ? (
            <CommentList comments={post.comments} />
          ) : (
            <i className="">No comments...</i>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

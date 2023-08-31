"use client";

import Button from "@components/atoms/Button";
import CommentList from "@components/organisms/CommentList";
import PostItem from "@components/organisms/PostItem";
import { Post } from "@domain/models/post";
import React, { useState } from "react";

interface PostDetailsProps {
  post: Post;
  onComment: (comment: string) => void;
  onLike: () => void;
  onDelete?: () => void;
}

const PostDetails: React.FC<PostDetailsProps> = ({
  post,
  onComment,
  onLike,
  onDelete,
}) => {
  const [comment, setComment] = useState("");

  const onKeyEnter: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    if (event.key == "Enter" && comment.trim() != "") {
      onComment(comment);
    }
  };

  if (!post) {
    return;
  }

  return (
    <div className="pl-10 pr-10">
      <PostItem post={post} hover={false} onLike={onLike} onDelete={onDelete} />

      <div className="mt-4 w-100 border-t-2 border-dashed border-gray-500">
        <div className="shadow-sm rounded-sm bg-gray-50 flex flex-row justify-end items-end p-2">
          <textarea
            placeholder="Escribe un comentario..."
            className="mt-2 w-full bg-gray-50 max-h-10 resize-none overflow-hidden"
            value={comment}
            onChange={(evt) => setComment(evt.currentTarget.value)}
            onKeyDown={onKeyEnter}
          />
          <Button
            className="bg-blue-300 rounded-full min-w-20 p-2 font-bold hover:bg-blue-500"
            onClick={() => {
              void onComment(comment);
            }}
          >
            Comentar
          </Button>
        </div>
        <div className="mt-2 w-100 h-fit">
          {post.comments?.length ? (
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

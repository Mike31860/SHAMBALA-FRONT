import AppLink from "@components/atoms/Link";
import { Comment } from "@domain/models/post";
import React from "react";
import { AuthorImage } from "./PostAuthor";

export interface CommentItemProps {
  comment: Comment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  return (
    <div className="w-100 h-fit flex space-x-3 text-gray-500 dark:text-gray-400">
      <AppLink href={`authors/${comment.author?.slug?.current ?? "notFound"}`}>
        <AuthorImage author={comment.author} />
      </AppLink>
      <div className="flex flex-col justify-start items-start">
        <AppLink href={`authors/${comment.author.username}`} className="h-fit">
          <span className="truncate text-sm">{comment.author?.username}</span>
        </AppLink>
        <p>{comment.content}</p>
      </div>
    </div>
  );
};

export default CommentItem;

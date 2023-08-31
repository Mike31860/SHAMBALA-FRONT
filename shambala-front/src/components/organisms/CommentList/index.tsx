import AppLink from "@components/atoms/Link";
import CommentItem from "@components/moleculs/CommentItem";
import { AuthorImage } from "@components/moleculs/PostAuthor";
import { Comment } from "@domain/models/post";
import React from "react";

export interface CommentListProps {
  comments: Comment[];
}
const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="w-100 h-fit flex flex-col gap-6">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;

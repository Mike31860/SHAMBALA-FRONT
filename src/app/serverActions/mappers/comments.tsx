import { Comment } from "@domain/models/post";

interface CommentApi {
  id: string;
  postId: string;
  owner: string;
  content: string;
}

export const mapApiComment = (comment: CommentApi): Comment => {
  return {
    author: {
      username: comment.owner,
    },
    content: comment.content,
    id: comment.id,
  };
};

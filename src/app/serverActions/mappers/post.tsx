import { Post } from "@domain/models/post";

interface ApiPost {
  id?: string;
  title: string;
  owner: string;
  urlImage?: string;
  description?: string;
  likesCount?: number;
  commentsCount?: number;
  userIdsLike?: string[];
  likeUser?: boolean;
}

export const mapApiPosts = (post: ApiPost): Post => {
  return {
    author: {
      username: post.owner,
    },
    createdAt: new Date(),
    id: post.id,
    title: post.title,
    description: post.description,
    likesCount: post.likesCount,
    commentsCount: post.commentsCount,
    likeUser: post.likeUser,
    image: {
      src: post.urlImage,
      alt: post.title,
    },
    slug: {
      current: post.id,
    },
  };
};

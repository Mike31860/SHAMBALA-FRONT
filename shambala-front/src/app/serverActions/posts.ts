import { Comment, Post } from "@domain/models/post";
import { mapApiPosts } from "./mappers/post";
import { mapApiComment } from "./mappers/comments";

export const baseComment: Comment = {
  id: "0",
  author: {
    username: "Miguel Torres",
  },
  content:
    "A random comment with random things and extra text asdijqwier qwirjqw 0ifoqwj fqwi fiqjw ",
};

export const basePost: Post = {
  id: "1",
  description: "Post's description...",
  author: {
    username: "MIguel Torres",
  },
  title: "Post 1",
  slug: {
    current: "1",
  },
  createdAt: new Date(),
};

export const getPosts = async () => {
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

export const getPostDetails = async (postId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/posts/${postId}`
    );
    const rawPost = await response.json();

    console.log("RAW POST ", rawPost);
    const post = mapApiPosts(rawPost);

    const commentsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/posts/${postId}/comments`
    );

    const rawComments = await commentsResponse.json();

    const comments = rawComments.map(mapApiComment);

    post.comments = comments;

    return post;
  } catch (error) {
    console.debug("FETCH ERROR ON POST DETAIL ", error);
  }
};

export const doLikePost = async (postId: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/posts/${postId}/like`,
      {
        method: "POST",
      }
    );
    return response;
  } catch (error) {
    console.debug("FETCH ERROR ON POST LIKE ", error);
  }
};

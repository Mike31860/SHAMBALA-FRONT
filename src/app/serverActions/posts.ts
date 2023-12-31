import { Comment, Post } from "@domain/models/post";
import { mapApiPosts } from "./mappers/post";
import { mapApiComment } from "./mappers/comments";

export interface PostDTO {
  title: string;
  urlImage: string;
  description: string;
}

export const getPosts = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/posts`
    );
    const rawPosts = await response.json();
    console.log("raw post", rawPosts);
    const posts = rawPosts ? rawPosts.map(mapApiPosts) : [];
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

    if (response.status !== 200) {
      throw new Error("Not found");
    }
    const rawPost = await response.json();

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
    throw error;
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

export const createPost = async (post: PostDTO) => {
  console.log("asasas");
  try {
    console.log(post);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/posts`,
      { method: "POST", body: JSON.stringify(post) }
    );
    return response.json();
  } catch (error) {
    console.debug("FETCH ERROR ON CREATE POST ", error);
  }
};

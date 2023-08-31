import { Comment, Post } from "@domain/models/post";

interface ApiPost {
  id: string;
  owner: string;
  title: string;
  description: string;
  likesCount?: string;
  commentsCount?: string;
}

const mapApiPosts = (post: ApiPost): Post => {
  return {
    author: {
      username: post.owner,
    },
    createdAt: new Date(),
    id: post.id,
    title: post.title,
    description: post.description,
    slug: {
      current: "",
    },
  };
};

export const baseComment: Comment = {
  id: "0",
  author: {
    username: "Miguel Torres",
  },
  content: "A random comment with random things and extra text asdijqwier qwirjqw 0ifoqwj fqwi fiqjw ",
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
  const posts: Post[] = [];

  for (let i = 0; i < 20; i++) {
    posts.push({
      ...basePost,
      slug: {
        current: i.toString(),
      },
      id: i.toString(),
    });
  }

  // try {
  //   const response = await fetch(
  //     `${process.env.NEXT_PUBLIC_API_BASE}/api/posts`
  //   );
  //   const rawPosts = await response.json();
  //   console.log("raw posts ", rawPosts);
  //   const posts = rawPosts.map(mapApiPosts);
  return posts;
  // } catch (error) {
  //   console.log("FETCH ERROR ", error);
  // }
};

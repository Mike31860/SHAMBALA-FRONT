export const commentPost = async (postId: string, content: string) => {
  try {
    const comment = {
      content,
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE}/api/posts/${postId}/comments`,
      {
        method: "POST",
        body: JSON.stringify(comment),
      }
    );

    return response;
  } catch (error) {
    console.debug("FETCH ERROR ON POST DETAIL ", error);
  }
};

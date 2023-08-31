export const getPostId = (url: string) => {
  const slugs = url.split("/");
  const slug = slugs[slugs.length - 2];

  return slug;
};

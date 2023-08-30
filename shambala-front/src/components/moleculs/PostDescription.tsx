import React from "react";

export interface PostDescriptionProps {
  description: string;
}

const PostDescription: React.FC<PostDescriptionProps> = ({ description }) => {
  return (
    <p className="mt-2 text-sm dark:text-white line-clamp-3">
      {description}
    </p>
  );
};
export default PostDescription;

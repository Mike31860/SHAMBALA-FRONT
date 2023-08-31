import { PostItemSharedProps } from "@components/organisms/PostItem/models";
import { Slug } from "@domain/models/post";
import Link from "next/link";
import React from "react";

export interface PostExcerptProps {
  excerpt?: string;
  slug?: Slug;
}

const PostExcerpt: React.FC<PostExcerptProps & PostItemSharedProps> = ({
  excerpt,
  slug,
  pathPrefix,
}) => {
  return (
    <div className="hidden">
      {excerpt && (
        <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
          <Link
            href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${slug.current}`}
          >
            {excerpt}
          </Link>
        </p>
      )}
    </div>
  );
};

export default PostExcerpt;

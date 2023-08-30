import { PostItemSharedProps } from "@components/organisms/PostItem/models";
import { Slug } from "@domain/models/post";
import { cx } from "@utils/commons";
import Link from "next/link";
import React from "react";

export interface PostTitleConfigProps {
  minimal?: boolean;
  fontSize?: "large" | "normal" | "small";
  fontWeight?: "bold" | "normal";
}

export interface PostTitleProps extends PostTitleConfigProps {
  title: string;
  slug: Slug;
}

const PostTitle: React.FC<PostTitleProps & PostItemSharedProps> = ({
  minimal,
  fontSize,
  fontWeight,
  pathPrefix,
  slug,
  title,
}) => {
  return (
    <h2
      className={cx(
        fontSize === "large" ? "text-2xl" : minimal ? "text-3xl" : "text-lg",
        fontWeight === "normal"
          ? "line-clamp-2 font-medium  tracking-normal text-black"
          : "font-semibold leading-snug tracking-tight",
        "mt-2    dark:text-white break-words"
      )}
    >
      <Link
        href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${slug.current}`}
        className="flex flex-col justify-between"
      >
        <span
          className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom
bg-no-repeat
transition-[background-size]
duration-500
hover:bg-[length:100%_3px]
group-hover:bg-[length:100%_10px]
dark:from-purple-800 dark:to-purple-900 truncate"
        >
          {title}
        </span>
      </Link>
    </h2>
  );
};

export default PostTitle;

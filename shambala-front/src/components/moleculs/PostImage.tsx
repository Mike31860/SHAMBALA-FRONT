import { PostItemSharedProps } from "@components/organisms/PostItem/models";
import { Image, Slug } from "@domain/models/post";
import { PhotoIcon } from "@heroicons/react/24/outline";
import { cx } from "@utils/commons";
import NextImage from "next/image";
import Link from "next/link";
import React from "react";

export interface PostImageProps {
  image: Image;
  slug: Slug;
}

const PostImage: React.FC<PostImageProps & PostItemSharedProps> = ({
  image,
  aspect,
  preloadImage,
  pathPrefix,
  slug,
}) => {
  const imageProps = image ? image : null;

  return (
    <div
      className={cx(
        " overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800"
      )}
    >
      <Link
        className={cx(
          "relative block",
          aspect === "landscape"
            ? "aspect-video"
            : aspect === "custom"
            ? "aspect-[5/4]"
            : "aspect-square"
        )}
        href={`/post/${pathPrefix ? `${pathPrefix}/` : ""}${slug.current}`}
      >
        {imageProps ? (
          <NextImage
            src={imageProps.src}
            // {...(post.image.blurDataURL && {
            //   placeholder: "blur",
            //   blurDataURL: post.image.blurDataURL,
            // })}
            alt={image.alt || "Thumbnail"}
            priority={preloadImage ? true : false}
            className="object-cover transition-all"
            fill
            sizes="(max-width: 768px) 30vw, 33vw"
          />
        ) : (
          <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 text-gray-200">
            <PhotoIcon />
          </span>
        )}
      </Link>
    </div>
  );
};

export default PostImage;

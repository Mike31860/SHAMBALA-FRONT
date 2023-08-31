import AppLink from "@components/atoms/Link";
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
  hover,
}) => {
  const imageProps = image ? image : null;

  return (
    <div
      className={cx([
        "overflow-hidden rounded-md bg-gray-100 dark:bg-gray-800 transition-all",
        "h-80 bg-red-300",
        { "hover:mt-6 hover:mb-4 hover:scale-105": hover },
      ])}
    >
      <AppLink
        className={cx(
          { "aspect-video": aspect == "landscape" && hover },
          { "aspect-[5/4]": aspect == "custom" && hover },
          { "aspect-square": hover }
        )}
        href={
          hover &&
          `/shambala/post/${pathPrefix ? `${pathPrefix}/` : ""}${slug.current}`
        }
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
            sizes="(max-width: 768px) 20vw, 23vw"
          />
        ) : (
          <div className="w-full h-full flex justify-center center items-center">
            <PhotoIcon className="flex w-32 h-32 text-gray-50" />
          </div>
        )}
      </AppLink>
    </div>
  );
};

export default PostImage;

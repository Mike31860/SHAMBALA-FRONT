import { Author } from "@domain/models/post";
import { PhotoIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface PostAuthorProps {
  author: Author;
}
const PostAuthor: React.FC<PostAuthorProps> = ({ author }) => {
  const authorimageProps = author?.image ? author.image : null;

  return (
    <div className="mb-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
      <Link href={`/author/${author?.slug?.current ?? "notFound"}`}>
        <div className="flex items-center gap-3">
          {author?.image ? (
            <div className="relative h-5 w-5 flex-shrink-0">
              <Image
                src={authorimageProps.src}
                alt={author?.username}
                className="rounded-full object-cover"
                fill
                sizes="20px"
              />
            </div>
          ) : (
            <Image
              src={
                "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              }
              width={80}
              height={80}
              alt="Avatar"
              className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
            />
          )}
          <span className="truncate text-sm">{author?.username}</span>
        </div>
      </Link>
    </div>
  );
};

export default PostAuthor;

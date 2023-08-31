import { Author } from "@domain/models/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LetteredAvatar } from "./LetteredAvatar";

export interface PostAuthorProps {
  author: Author;
}

interface AuthorImageProps {
  author?: Author;
}
export const AuthorImage: React.FC<AuthorImageProps> = ({ author }) => {
  const authorimageProps = author?.image ? author.image : null;

  if (!author.image) {
    return <LetteredAvatar name={author.username} />;
  }

  return (
    <div className="relative h-5 w-5 flex-shrink-0">
      <Image
        src={authorimageProps.src}
        alt={author?.username}
        className="rounded-full object-cover"
        fill
        sizes="20px"
      />
    </div>
  );
};

const PostAuthor: React.FC<PostAuthorProps> = ({ author }) => {
  return (
    <div className="mb-3 flex items-center space-x-3 text-black font-bold font-sans dark:text-gray-400">
      <Link href={`/author/${author?.slug?.current ?? "notFound"}`}>
        <div className="flex items-center gap-3">
          <AuthorImage author={author} />
          <span className="truncate text-sm">{author?.username}</span>
        </div>
      </Link>
    </div>
  );
};

export default PostAuthor;

"use client";

import React from "react";
import Link from "next/link";
import Container from "@components/atoms/Container";
import PostItem from "@components/organisms/PostItem";
import { NextPage } from "next";
import { Post } from "@domain/models/post";

export interface AppMainViewProps {
  posts: Post[];
  onLike: (postId: string) => void;
  onDelete?: (postId: string) => void;
}

const AppMainView: NextPage<AppMainViewProps> = ({
  posts,
  onLike,
  onDelete,
}) => {
  return (
    <>
      {posts && posts.length && (
        <Container>
          <div className="mt-2 flex flex-col gap-8">
            {posts.map((post) => (
              <PostItem
                key={post.id}
                post={post}
                aspect="square"
                onLike={() => onLike(post.id)}
                onDelete={() => onDelete(post.id)}
              />
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <Link
              href="/archive"
              className="relative inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-2 pl-4 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20 disabled:pointer-events-none disabled:opacity-40 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
            >
              <span>View all Posts</span>
            </Link>
          </div>
        </Container>
      )}
    </>
  );
};

export default AppMainView;

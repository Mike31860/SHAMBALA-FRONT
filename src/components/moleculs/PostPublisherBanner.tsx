import RoundImage, { RoundImageProps } from "@components/atoms/RoundImage";
import React, { FC } from "react";

export interface PostPublisherBannerProps {
  imageProps: RoundImageProps;
  username: string;
  email: string;
}

const PostPublisherBanner: FC<PostPublisherBannerProps> = ({
  imageProps,
  username,
  email,
}) => {
  return (
    <li className="flex py-4 first:pt-0 last:pb-0">
      <RoundImage {...imageProps} />
      <div className="ml-3 overflow-hidden ltr:ml-3 rtl:mr-3">
        <p className="text-sm font-medium text-slate-900">{username}</p>
        <p className="text-sm text-slate-500 truncate">{email}</p>
      </div>
    </li>
  );
};

export default PostPublisherBanner;

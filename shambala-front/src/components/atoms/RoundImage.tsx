import Image, { ImageProps } from "next/image";
import React, { FC } from "react";

export interface RoundImageProps extends ImageProps {}
const RoundImage: FC<RoundImageProps> = ({ alt, src, ...props }) => {
  return (
    <Image
      className="h-10 w-10 rounded-full"
      alt={alt ?? ""}
      src={src ?? ""}
      {...props}
    />
  );
};

export default RoundImage;

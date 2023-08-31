import Image, { ImageProps } from "next/image";
import React from "react";

export interface CardImageProps extends ImageProps {}

const CardImage: React.FC<CardImageProps> = ({ alt, src, ...props }) => {
  return (
    <div className="md:shrink-0">
      <Image
        className="h-48 w-full object-cover md:h-full md:w-48"
        src={src ?? ""}
        alt={alt ?? ""}
        {...props}
      />
    </div>
  );
};
export default CardImage;

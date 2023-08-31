import { Slug } from "@domain/models/post";

export interface PostItemSharedProps {
  pathPrefix?: string;
  aspect?: "landscape" | "custom" | "square";
  preloadImage?: boolean;
  hover?: boolean;
}

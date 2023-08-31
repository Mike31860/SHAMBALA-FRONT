import { cx } from "@utils/commons";
import { Post } from "@domain/models/post";
import { HeartIcon, TrashIcon } from "@heroicons/react/24/solid";

import PostAuthor from "@components/moleculs/PostAuthor";
import PostImage from "@components/moleculs/PostImage";
import PostTitle, {
  PostTitleConfigProps,
} from "@components/moleculs/PostTitle";
import { PostItemSharedProps } from "./models";
import PostItemDate from "@components/moleculs/PostItemDate";
import PostExcerpt from "@components/moleculs/PostExcerpt";
import PostDescription from "@components/moleculs/PostDescription";

export interface PostItemProps
  extends PostItemSharedProps,
    PostTitleConfigProps {
  post: Post;
  onLike?: () => void;
  onDelete?: () => void;
}

const PostItem: React.FC<PostItemProps> = ({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
  hover = true,
  onLike,
  onDelete,
}) => {
  return (
    <div className={cx("group ", minimal && "grid gap-10 md:grid-cols-2")}>
      <PostAuthor author={post.author} />
      <PostImage
        hover={hover}
        image={post.image}
        slug={post.slug}
        pathPrefix={pathPrefix}
        aspect={aspect}
        preloadImage={preloadImage}
      />
      <div className="mt-2 flex flex-row gap-4">
        {onLike && (
          <HeartIcon
            onClick={onLike}
            className={cx(
              "w-8 h-8 hover:cursor-pointer ",
              {
                "dark:text-red-500 dark:hover:text-white text-red-500 hover:text-gray-500":
                  post.likeUser,
              },
              {
                "dark:text-white dark:hover:text-red-500 hover:text-red-500":
                  !post.likeUser,
              }
            )}
          />
        )}
        {onDelete && (
          <TrashIcon
            onClick={onDelete}
            className="w-8 h-8 text-red-700 hover:text-red-900 hover:cursor-pointer"
          />
        )}
      </div>
      <div className={cx(minimal && "flex items-center")}>
        <div>
          <PostTitle
            fontSize={fontSize}
            slug={post.slug}
            pathPrefix={pathPrefix}
            title={post.title}
            fontWeight={fontWeight}
            hover={hover}
          />

          <PostItemDate date={post?.publishedAt || post.createdAt} />

          <PostExcerpt slug={post.slug} excerpt={post.excerpt} />
          <PostDescription description={post.description} />
        </div>
      </div>
    </div>
  );
};

export default PostItem;

import { cx } from "@utils/commons";
import { Post } from "@domain/models/post";
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
}

const PostItem: React.FC<PostItemProps> = ({
  post,
  aspect,
  minimal,
  pathPrefix,
  preloadImage,
  fontSize,
  fontWeight,
}) => {
  return (
    <div className={cx("group", minimal && "grid gap-10 md:grid-cols-2")}>
      <PostAuthor author={post.author} />
      <PostImage
        image={post.image}
        slug={post.slug}
        pathPrefix={pathPrefix}
        aspect={aspect}
        preloadImage={preloadImage}
      />
      <div className={cx(minimal && "flex items-center")}>
        <div>
          <PostTitle
            fontSize={fontSize}
            slug={post.slug}
            pathPrefix={pathPrefix}
            title={post.title}
            fontWeight={fontWeight}
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

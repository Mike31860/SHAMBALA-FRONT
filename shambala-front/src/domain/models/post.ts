export interface Image {
  src: string;
  alt: string;
}

export interface Slug {
  current: string;
}

export interface Author {
  username: string;
  image?: Image;
  slug?: Slug;
}

export interface Post {
  id: string;
  title: string;
  description: string;
  author: Author;
  slug: Slug;
  image?: Image;
  excerpt?: string;
  publishedAt?: Date;
  createdAt: Date;
}

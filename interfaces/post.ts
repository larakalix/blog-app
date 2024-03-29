// Generated by https://quicktype.io

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  slug: string;
  mark: boolean;
  tags: Tag[];
  thumbnail: Thumbnail;
}

export enum PostType {
  Minimal = 'Minimal',
  Grid = 'Grid',
  Clean = 'Clean',
  Lush = 'Lush',
  Undefined = '',
}

export interface Tag {
  id: string;
  title: string;
  mark: boolean;
}

export interface Thumbnail {
  colors: Color[];
  url: string;
}

export interface Color {
  hex: string;
}

export interface PostProps {
  id: string;
  title: string;
  slug: string;
  thumbnail: Thumbnail;
  author: string;
  mark: boolean;
  tags: Tag[];
  type?: PostType;
}

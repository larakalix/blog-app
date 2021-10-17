export interface Post {
    id: string;
    title: string;
    slug: string;
    thumbnail: string;
    author: string;
    date: string;
    mark: boolean;
    tags: Tag[];
}

export interface Tag {
    title: string;
    mark: boolean;
}

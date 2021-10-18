export const HOME_QUERY = `query HOME {
  allPosts(orderBy: _createdAt_DESC) {
    id
    title
    author
    slug
    mark
    tags {
      id
      title
      mark
    }
    thumbnail {
      url
    }
  }
}`;

export const TAG_POSTS_QUERY = `query TAG_POSTS($tagId: ItemId) {
  allPosts(orderBy: _createdAt_DESC, filter: {tags: {allIn: [$tagId]}}) {
    id
    title
    author
    slug
    mark
    tags {
      id
      title
      mark
    }
    thumbnail {
      url
    }
  }
}`;

export const TAGS_QUERY = `query TAGS($limit: IntType) {
    allTags(first: $limit) {
      title
    }
  }`;

export const ONE_TAG = `query TAG($title: String) {
    tag(filter: {title: {eq: $title}}) {
      id
    }
  }`;

export const ARTICLE_QUERY = `query ARTICLE($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      id
      title
      content
      author
      slug
      mark
      tags {
        id
        title
        mark
      }
      thumbnail {
        colors {
          hex
        }
        url
      }
    }
  }`;

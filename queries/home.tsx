export const HOME_QUERY = `query HOME {
    allPosts(orderBy: _createdAt_ASC) {
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
        colors {
          hex
        }
        url
      }
    }
  }`;

  export const TAGS_QUERY = `query TAGS($limit: IntType) {
    allTags(first: $limit) {
      title
    }
  }`;

  export const ARTICLE_QUERY = `query ARTICLE($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
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
        colors {
          hex
        }
        url
      }
    }
  }`;

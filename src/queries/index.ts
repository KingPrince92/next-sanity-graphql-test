export const FETCH_ALL_BLOB_POSTS = `
query getRecentBlogPosts{
  allPost (sort: {_updatedAt: DESC}) {
    title
    slug {
      current
    }
    categories {
      title
      _id
    }
  }
}
`;

export const GET_BLOG_POST_BY_CATEGORY_ID = `
query getBlogPostById($id: ID!) {
    allPost (where: {_: {references: $id}}) {
      title
      slug {
        current 
      }
      categories {
        title
        _id
      }
    }
    allCategory(where: {_id: {eq: $id}}) {
        title
      }
  }`;

export const GET_BLOG_BY_SLUG = `
  query getBlogBySlug($slug: String) {
      allPost(where:{slug: {current: {eq: $slug}}}) {
        updatedAt:_updatedAt
        publishedAt
        title
        author {
          name
          slug {
            current
          }
          image {
            asset {
              altText
              url
              metadata {
                dimensions {
                  width
                  height
                }
              }
            }
          }
        }
        categories {
          title
        }
        mainImage {
          asset {
            altText
            url
            metadata {
              dimensions {
                height
                width
              }
            }
          }
        }
        slug {
          current
        }
        categories {
          _id
          title
        }
        bodyRaw
      }
    }`;

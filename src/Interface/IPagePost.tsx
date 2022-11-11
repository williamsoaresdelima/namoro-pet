import { IGatsbyImageData } from "gatsby-plugin-image"

export interface IPagePost {
  markdownRemark:{
    fields: {
      slug: string
    }
    html: string
    frontmatter: {
      authorImage: string,
      title: string,
      postAuthor: string,
      date: string,
      image: {
        childImageSharp: {
          gatsbyImageData: IGatsbyImageData
        }
      }
    }
  }
};

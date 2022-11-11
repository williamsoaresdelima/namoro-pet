import { IGatsbyImageData } from "gatsby-plugin-image"

export default interface IPageFeed {
  allMarkdownRemark: {
    pageInfo: {
      currentPage: number,
      pageCount: number,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
    }
    nodes: INode[]
  }
};

interface IFrontmatter {
  title: string,
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

interface IFields {
  slug: string,
}

interface INode {
  fields: IFields,
  frontmatter: IFrontmatter,
  id: string
}
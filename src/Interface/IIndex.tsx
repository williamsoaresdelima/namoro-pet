import { IGatsbyImageData } from "gatsby-plugin-image"

export default interface IIndex {
  allMarkdownRemark: {
    pageInfo: {
      totalCount: number,
      currentPage: number,
      pageCount: number,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
    },
    nodes: INode[]
  }
  json: {
    imageURL: string,
    name: string,
    ocupation: string,
    title: string,
    breed: string,
    description: string
  }
}

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
  frontmatter: IFrontmatter
}
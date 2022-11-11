import React from "react";
import { graphql, HeadProps, PageProps } from "gatsby";
import { IGatsbyImageData, getImage } from "gatsby-plugin-image";

import Layout from "../layout/Layout";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Feed from "../components/Feed/Feed";
import Pagination from "../components/Pagination/Pagination";
import MetaHead from "../components/MetaHead/MetaHead";

interface PropsTypes {
  allMarkdownRemark: {
    pageInfo: {
      totalCount: number,
      currentPage: number,
      pageCount: number,
      hasNextPage: boolean,
      hasPreviousPage: boolean,
    },
    nodes: [
      fields: {
        slug: string,
      },
      frontmatter: {
        feedTitle: string,
        feedLink: string,
        feedImageURL: string
        image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
      }
    ]
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
  frontmatter: [  
    feedTitle: string,
    feedLink: string,
    feedImageURL: string
  ]
}

interface INode {
    fields: {
      slug: string,
    },
    frontmatter: {
      feedTitle: string,
      feedLink: string,
      feedImageURL: string
    }
}

function Home({ data } : PageProps<PropsTypes>) {
  const profileHeader = data.json;
  const pagination = data.allMarkdownRemark.pageInfo;
  const items = data.allMarkdownRemark.nodes.map(
    ({ frontmatter, fields }: any) => ({
      ...frontmatter,
      feedLink: `/posts/${fields.slug}`,
      feedImageURL: frontmatter.image.childImageSharp.gatsbyImageData
    })
  );
  return (
    <Layout>
      <div>
        <ProfileHeader
          {...profileHeader}  
        />
      </div>
      <Feed data={{...items}} />
      <Pagination data={pagination} />
    </Layout>
  );
}

export default Home;

export const pageQuerry = graphql`
{
  allMarkdownRemark(
    limit: 6
    sort: { fields: frontmatter___date, order: DESC }
  )  {
    pageInfo {
      totalCount
      currentPage
      pageCount
      hasNextPage
      hasPreviousPage
    }
    nodes {
      fields {
        slug
      }
      frontmatter {
        feedTitle
        feedLink
        feedImageURL
        image {
          childImageSharp {
            gatsbyImageData(
              formats: [JPG]
              layout: CONSTRAINED
            )
          }
        }
      }
    }
  }
  json {
    imageURL
    name
    ocupation
    title
    breed
    description
  }
}
`

export const Head = () => {
  const items = {
    title: `Namoro-Pet | Home`,
    path: `/`,
  }
  return (
    <MetaHead data={items}/>
  );
}
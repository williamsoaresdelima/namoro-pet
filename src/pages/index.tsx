import React from "react";
import { graphql, PageProps } from "gatsby";
import { IGatsbyImageData, getImage } from "gatsby-plugin-image";

import Layout from "../layout/Layout";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Feed from "../components/Feed/Feed";

interface PropsTypes {
  allMarkdownRemark: {
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

function Home({ data } : PageProps<any>) {
  const profileHeader = data.json;
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
    </Layout>
  );
}

export default Home;

export const pageQuerry = graphql`
{
  allMarkdownRemark(sort: {fields: frontmatter___feedImageURL})  {
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
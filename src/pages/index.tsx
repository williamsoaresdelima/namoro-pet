import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../layout/Layout";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Feed from "../components/Feed/Feed";
import Pagination from "../components/Pagination/Pagination";
import MetaHead from "../components/MetaHead/MetaHead";
import IIndex from "../Interface/IIndex";



function Home({ data } : PageProps<IIndex>) {
  const profileHeader = data.json;
  const pagination = data.allMarkdownRemark.pageInfo;
  const items = data.allMarkdownRemark.nodes.map(
    ({ frontmatter, fields }) => ({
      ...frontmatter,
      feedTitle: frontmatter.title,
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
        title
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
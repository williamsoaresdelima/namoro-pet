import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../layout/Layout";
import ProfileHeader from "../components/ProfileHeader/ProfileHeader";
import Feed from "../components/Feed/Feed";

interface PropsTypes {
  allMarkdownRemark: {
    nodes: [
      frontmatter: {
        feedTitle: string,
        feedLink: string,
        feedImageURL: string
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

interface frontmatter {
  feedTitle: string,
  feedLink: string,
  feedImageURL: string
}

function Home({ data } : PageProps<PropsTypes>) {
  const profileHeader = data.json;
  const items = data.allMarkdownRemark.nodes.map((item : any) => item.frontmatter);

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
      frontmatter {
        feedTitle
        feedLink
        feedImageURL
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
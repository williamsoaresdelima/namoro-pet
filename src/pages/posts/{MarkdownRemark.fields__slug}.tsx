import React from 'react'
import { graphql, PageProps } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

import Post from '../../components/Post/Post'
import Layout from '../../layout/Layout'

interface QueryProps {
  markdownRemark:{
    fields: {
      slug: string
    },
    __html: string,
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
}

function PagePost({data} : PageProps<QueryProps>) {
  const {
    html,
    frontmatter: { authorImage, date, title, postAuthor, image },
  } = (data as any).markdownRemark;
  return (
    <Layout>
      <Post data={{ html, authorImage, date, title, postAuthor, image }} />
    </Layout>
  )
}

export default PagePost

export const pageQuery = graphql`
  query GetPostBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      fields {
        slug
      }
      html
      frontmatter {
        authorImage
        title
        postAuthor
        date
        image {
          childImageSharp {
            gatsbyImageData(
              formats: [WEBP, JPG]
            )
          }
        }
      }
    }
  }
`;
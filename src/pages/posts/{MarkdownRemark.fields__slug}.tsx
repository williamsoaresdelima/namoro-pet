import React from 'react'
import { graphql, HeadProps, PageProps } from 'gatsby'

import Post from '../../components/Post/Post'
import Layout from '../../layout/Layout'
import MetaHead from '../../components/MetaHead/MetaHead'
import { IPagePost } from '../../Interface/IPagePost'

function PagePost({data} : PageProps<IPagePost>) {
  const {
    html,
    frontmatter: { authorImage, date, title, postAuthor, image },
  } = data.markdownRemark;
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

export const Head = ({ data }: HeadProps<IPagePost>) => {
  const items = {
    title: `${data.markdownRemark.frontmatter.postAuthor} | ${data.markdownRemark.frontmatter.title}`,
  }
  return (
    <MetaHead data={items}/>
  );
}
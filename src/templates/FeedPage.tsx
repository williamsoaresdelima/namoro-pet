import React from "react";
import { PageProps, graphql, HeadProps } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

import * as S from './style'
import  Feed  from "../components/Feed/Feed";
import  Layout  from "../layout/Layout";
import Pagination from "../components/Pagination/Pagination";
import MetaHead from "../components/MetaHead/MetaHead";

export default function FeedPage({ data }: PageProps<QueryProps>) {
  const pagination = (data as any).allMarkdownRemark.pageInfo;
  const items = (data as any).allMarkdownRemark.nodes.map(
    ({ frontmatter, fields }: any) => ({
      ...frontmatter,
      feedLink: `/posts/${fields.slug}`,
      feedImageURL: frontmatter.image.childImageSharp.gatsbyImageData
    })
  );

  return (
    <Layout>
      <S.Container>
        <h2>
          Página {pagination.currentPage} de {pagination.pageCount}
        </h2>
        <Feed data={items}/>
        <Pagination data={pagination} />
      </S.Container>
    </Layout>
  );
}

export const pageQuery = graphql`
  query GetPagePosts($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      pageInfo {
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
          image {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                formats: [JPG]
              )
            }
          }
          feedTitle
          feedLink
          feedImageURL
        }
        id
      }
    }
  }
`;

interface QueryProps {
  allMarkdownRemark: {
    pageInfo: {
      currentPage: number,
      pageCount: number,
      hasNextPage: boolean,
      hasPreviousPage: boolean
    }
    nodes: {
      fields: {
        slug: string
      }
      frontmatter: {
        image: {
          childImageSharp: {
            gatsbyImageData: IGatsbyImageData
          }
        }
        feedTitle: string,
        feedLink: string,
        feedImageURL: string,
      }
      id: string
    }
  }
}

export const Head = ({ data }: HeadProps) => {
  const { currentPage, pageCount } = (data as any).allMarkdownRemark.pageInfo;
  const items = {
    title: `Namoro-Pet | Página ${currentPage} de ${pageCount}`,
    path: `/pages/${currentPage}`,
  }
  return (
    <MetaHead data={items}/>
  );
}
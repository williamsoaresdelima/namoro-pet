import React from "react";
import { PageProps, graphql, HeadProps } from "gatsby";

import * as S from './style'
import Feed from "../components/Feed/Feed";
import Layout from "../layout/Layout";
import Pagination from "../components/Pagination/Pagination";
import MetaHead from "../components/MetaHead/MetaHead";
import IPageFeed from "../Interface/IPageFeed";

export default function FeedPage({ data }: PageProps<IPageFeed>) {
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
          title
        }
        id
      }
    }
  }
`;

export const Head = ({ data }: HeadProps<IPageFeed>) => {
  const { currentPage, pageCount } = data.allMarkdownRemark.pageInfo;
  const items = {
    title: `Namoro-Pet | Página ${currentPage} de ${pageCount}`,
    path: `/pages/${currentPage}`,
  }
  return (
    <MetaHead data={items}/>
  );
}
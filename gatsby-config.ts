import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://williamsoaresdelima.github.io/namoro-pet`,
  },
  pathPrefix: '/namoro-pet',
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-transformer-json`,
      options: {
        typeName: `Json`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}

export default config

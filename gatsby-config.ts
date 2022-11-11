import type { GatsbyConfig } from "gatsby"


const title = 'Namoro-pet'
const pathPrefix = '/namoro-pet'

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://williamsoaresdelima.github.io/`,
    title,
    description: "Um site par cachorro",
    image: `${pathPrefix}/icon.png`,
    keywords: ["Namoro", "Pet", "Projeto", "Infnet", "Cachorro"],
    pathPrefix,
  },
  pathPrefix: '/namoro-pet',
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Namoro-Pet',
        short_name: 'Namoro-Pet',
        start_url: "/",
        background_color: "#eee",
        theme_color: "#fff",
        display: "standalone",
        icon: "src/images/icon.png",
        crossOrigin: `use-credentials`,
      },
    },
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
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
  ],
}

export default config

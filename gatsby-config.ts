import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://williamsoaresdelima.github.io/namoro-pet`,
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: 'gatsby-plugin-remove-serviceworker',
      options: {},
    }
  ],
}

export default config

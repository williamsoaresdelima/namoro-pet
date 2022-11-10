import { IGatsbyImageData } from "gatsby-plugin-image";

interface IFeed {
  feedImageURL: IGatsbyImageData,
  feedTitle: string,
  feedLink: string,
}

export default IFeed;
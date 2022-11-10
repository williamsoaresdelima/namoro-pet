import { IGatsbyImageData } from "gatsby-plugin-image";

export default interface IFeedItem {
  imageURL: IGatsbyImageData,
  title: string,
}
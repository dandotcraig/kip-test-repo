import { ImageDataLike } from "gatsby-plugin-image";

export interface IBioCard {
  name: string;
  bio?: string;
  state?:string;
  tagline?:string;
  title?: string;
  height?: boolean;
  detail: string;
  imgSrc: ImageDataLike;
  imgAlt: string;
  rectangle?:boolean
}
export interface IContentBox {
  title: string;
  tagline: string
  sub_title?: string
  content?: string
  backgroundColor?: string
  textColor?: string
  button?: any
  heading: string
  description: string
}

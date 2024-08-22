export interface IblogsData {
  blogsData: Cards[];
}
type Cards = {
  title: string;
  tagline: string;
  btn: string;
  description: string;
  link: string;
};

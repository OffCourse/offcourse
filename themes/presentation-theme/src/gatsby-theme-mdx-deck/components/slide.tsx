import { Slide } from "gatsby-theme-mdx-deck/src/components/slide";
import Layout from "../../components/Layout";

const NewSlide = ({ slide, ...props }: any) => {
  return <Slide slide={<Layout>{slide}</Layout>} {...props} />;
};

export { NewSlide as Slide };
export default NewSlide;

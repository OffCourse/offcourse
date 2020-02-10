import { Children, cloneElement } from "react";
import { Slide } from "gatsby-theme-mdx-deck/src/components/slide";
import Layout from "../../components/Layout";

const NewSlide = ({ slide, ...props }: any) => {
  const children = Children.map(slide, s =>
    cloneElement(s, {
      slideData: { index: props.index, total: props.navigate.length }
    })
  );
  return <Slide slide={<Layout>{children}</Layout>} {...props} />;
};

export { NewSlide as Slide };
export default NewSlide;

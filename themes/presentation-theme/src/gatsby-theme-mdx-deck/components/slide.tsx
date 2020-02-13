import { Fragment } from "react";
import { Slide } from "gatsby-theme-mdx-deck/src/components/slide";
import Layout from "../../components/Layout";

import { Global } from "@emotion/core";

const NewSlide = ({ slide, ...props }: any) => {
  return (
    <Fragment>
      <Global styles={theme => theme.globals} />
      <Slide slide={<Layout>{slide}</Layout>} {...props} />
    </Fragment>
  );
};

export { NewSlide as Slide };
export default NewSlide;

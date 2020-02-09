/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";

const post: FunctionComponent = (props: any) => {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
};


export default post;

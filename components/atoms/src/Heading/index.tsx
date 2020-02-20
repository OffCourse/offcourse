/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading as H } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { formatTitle } from "../helpers";

type HeadingProps = { children: string } & IThemeable;

const Heading: FunctionComponent<HeadingProps> = ({ children, className }) => {
  return <H className={className}>{formatTitle(children)}</H>;
};
export default Heading;

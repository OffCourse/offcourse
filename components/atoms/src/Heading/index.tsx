/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading as H } from "theme-ui";
import { IThemeable, Heading } from "@offcourse/interfaces/src";
import { formatTitle } from "../helpers";

type HeadingProps = (Heading | { children: any[] }) & IThemeable;

const Heading: FunctionComponent<HeadingProps> = ({
  children,
  className,
  as
}) => {
  if (children instanceof Array) {
    return (
      <H as={as} className={className}>
        {children[0]}
        {formatTitle(children[1])}
      </H>
    );
  }
  return (
    <H as={as} className={className}>
      {formatTitle(children)}
    </H>
  );
};

export default Heading;

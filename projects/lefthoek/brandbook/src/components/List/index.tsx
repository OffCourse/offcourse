/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { listStyles, listItemStyles } from "./styles";

export const List: FunctionComponent<{ data: string[] }> = ({ data }) => (
  <ul sx={listStyles}>
    {data.map((item) => (
      <li sx={listItemStyles}>{item}</li>
    ))}
  </ul>
);

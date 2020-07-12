/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";

export const TextBlock: FunctionComponent<{ data: string }> = ({ data }) => {
  return (
    <div>
      <p>{data}</p>
    </div>
  );
};

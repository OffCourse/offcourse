/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";

export const TextBlock: FunctionComponent<{ data: string }> = ({ data }) => {
  return (
    <div sx={{ px: "1rem" }}>
      <p>{data}</p>
    </div>
  );
};

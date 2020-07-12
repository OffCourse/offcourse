/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { entryTitleCase } from "./utilities";
const cellStyle = { py: "0.5rem", px: "1rem" };

export const DataTable: FunctionComponent<{
  data: { [k: string]: string | number };
}> = ({ data }) => (
  <table sx={{ borderSpacing: 0, width: "100%" }}>
    {Object.entries(data).map(([k, v]) => (
      <tr
        sx={{
          "&:nth-of-type(even)": { bg: "lightgrey" },
        }}
      >
        <td sx={cellStyle}>{entryTitleCase(k)}</td>
        <td sx={cellStyle}>{v}</td>
      </tr>
    ))}
  </table>
);

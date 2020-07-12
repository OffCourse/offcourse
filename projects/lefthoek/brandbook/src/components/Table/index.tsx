/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { entryTitleCase } from "../utilities";
import { tableStyles, tableRowStyles, cellStyle } from "./styles";

export const Table: FunctionComponent<{
  data: Record<string, number | string | string[]>;
}> = ({ data }) => (
  <table sx={tableStyles}>
    {Object.entries(data).map(([k, v]) => (
      <tr sx={tableRowStyles}>
        <td sx={cellStyle}>{entryTitleCase(k)}</td>
        <td sx={cellStyle}>
          {Array.isArray(v) ? v.map((x) => <p sx={{m: 0}}>{x}</p>) : v}
        </td>
      </tr>
    ))}
  </table>
);

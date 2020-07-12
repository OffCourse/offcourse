/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { entryTitleCase } from "../utilities";
import { List } from "../List";
import { Table } from "../Table";
import { TextBlock } from "../TextBlock";

const selectComponent: (
  data: string | string[] | { [k: string]: string | number }
) =>
  | FunctionComponent<{ data: string }>
  | FunctionComponent<{ data: string[] }>
  | FunctionComponent<{ data: { [k: string]: string | number } }> = (data) => {
  if (typeof data === "string") {
    return TextBlock;
  } else {
    return Array.isArray(data) ? List : Table;
  }
};

export const DataSection: FunctionComponent<{
  title?: string;
  data?: any;
  children?: any;
}> = ({ title, data, children }) => {
  const DataComponent = selectComponent(data);
  return (
    <section
      style={{ borderBottom: "1px solid white", paddingBottom: "2rem" }}
      className={title}
    >
      {title && (
        <div>
          <h1 sx={{ m: 0 }}>{entryTitleCase(title)}</h1>
        </div>
      )}
      {data && DataComponent && <DataComponent data={data} />}
      {children && children}
    </section>
  );
};

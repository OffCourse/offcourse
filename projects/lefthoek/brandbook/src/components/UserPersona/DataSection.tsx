/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { entryTitleCase } from "../utilities";
import { List } from "../List";
import { Table } from "../Table";
import { TextBlock } from "../TextBlock";
import { sectionStyles, sectionTitleStyles } from "./styles";

const selectComponent: (
  data: string | string[] | { [k: string]: string | number }
) =>
  | FunctionComponent<{ data: string }>
  | FunctionComponent<{ data: string[] }>
  | FunctionComponent<{ data: { [k: string]: string | string[] | number } }> = (
  data
) => {
  if (typeof data === "string") {
    return TextBlock;
  } else {
    return Array.isArray(data) ? List : Table;
  }
};

export const DataSection: FunctionComponent<{
  title?: string;
  data?: any;
  className?: string;
  children?: any;
}> = ({ title, data, children, className }) => {
  const DataComponent = selectComponent(data);
  return (
    <section style={sectionStyles} className={className}>
      {title && (
        <div>
          <h1 sx={sectionTitleStyles}>{entryTitleCase(title)}</h1>
        </div>
      )}
      {data && DataComponent && <DataComponent data={data} />}
      {children && children}
    </section>
  );
};

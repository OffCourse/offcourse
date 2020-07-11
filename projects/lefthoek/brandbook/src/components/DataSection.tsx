import React, { FunctionComponent } from "react";
import { entryTitleCase } from "./utilities";
import { DataList } from "./DataList";
import { DataTable } from "./DataTable";
import { DataText } from "./DataText";

const selectComponent: (
  data: string | string[] | { [k: string]: string | number }
) =>
  | FunctionComponent<{ data: string }>
  | FunctionComponent<{ data: string[] }>
  | FunctionComponent<{ data: { [k: string]: string | number } }> = (data) => {
  if (typeof data === "string") {
    return DataText;
  } else {
    return Array.isArray(data) ? DataList : DataTable;
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
      {title && <h1>{entryTitleCase(title)}</h1>}
      {data && DataComponent && <DataComponent data={data} />}
      {children && children}
    </section>
  );
};

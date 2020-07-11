import React, { FunctionComponent } from "react";

export const DataList: FunctionComponent<{ data: string[] }> = ({ data }) => (
  <ul>
    {data.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
);

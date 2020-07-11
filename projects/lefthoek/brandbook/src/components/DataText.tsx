import React, { FunctionComponent } from "react";

export const DataText: FunctionComponent<{ data: string }> = ({ data }) => {
  return <p>{data}</p>;
};

import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { graphql, useStaticQuery } from "gatsby";
import { IThemeable } from "@offcourse/interfaces";

const Logo: FunctionComponent<IThemeable> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query siteTitleOverride {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title;
  return <DisplayText className={className}>{title}</DisplayText>;
};

export default styled(Logo)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  h1 {
    margin-right: 0;
  }
`;

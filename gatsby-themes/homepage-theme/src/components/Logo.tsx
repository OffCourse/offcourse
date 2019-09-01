import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Styled } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import { IThemeable } from "@offcourse/interfaces";

const Logo: FunctionComponent<IThemeable> = ({ className }) => {
  const data = useStaticQuery(graphql`
    query siteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const title = data.site.siteMetadata.title;
  return <Styled.h3 className={className}>{title}</Styled.h3>;
};

export default styled(Logo)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 1rem;
`;

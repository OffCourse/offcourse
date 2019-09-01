import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { useGetAllSections } from "../hooks";
import { Styled } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces";

const Logo: FunctionComponent<IThemeable> = ({ className }) => {
  const { siteName } = useGetAllSections();
  return <Styled.h3 className={className}>{siteName}</Styled.h3>;
};

export default styled(Logo)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 1rem;
`;

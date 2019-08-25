import React, { ReactNode, FunctionComponent } from "react";
import { formatTitle } from "./helpers";
import styled from "@emotion/styled";
import { IStylable } from "../interfaces";

type MessageProps = {
  children: string;
  className?: string;
  isBasic?: boolean;
  name?: string;
};

const Message: FunctionComponent<MessageProps & IStylable> = ({
  children,
  className
}) => {
  return <div className={className}>{formatTitle(children)}</div>;
};

export default styled(Message)`
  box-sizing: border-box;
  display: flex;
  flex: 1;
  color: ${({ theme }) => theme.colors.error};
  padding: ${({ theme, isBasic }) =>
    `${theme.space[isBasic ? 0 : 4]} ${theme.space[6]} ${theme.space[4]} ${
      theme.space[6]
    }`};
  user-select: none;
  font-family: ${({ theme }) => theme.fonts.base};
  min-height: ${({ isBasic }) => (isBasic ? 0 : "2.25rem")};
`;

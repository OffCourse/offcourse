import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { IThemeable } from "@offcourse/interfaces";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";

type BaseProps = IBaseSection & IThemeable;

const Base: FunctionComponent<BaseProps> = ({
  role,
  className,
  children,
  ...rest
}) => {
  return (
    <div id={role} className={className}>
      {children || <pre>{JSON.stringify({ role, ...rest }, null, 2)}</pre>}
    </div>
  );
};

export default styled(Base)`
  display: grid;
  align-items: space-between;
  background-color: ${({ theme }) => theme.grayScale[2]};
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.grayScale[1]};
  }
`;

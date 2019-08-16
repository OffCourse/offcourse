import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import DisplayText from "./DisplayText";
import { IStylable } from "../interfaces";

type LowDownProps = {
  slogan: string;
};

const LowDown: FunctionComponent<LowDownProps & IStylable> = ({
  slogan,
  className
}) => {
  const words = slogan.split(" ");
  const isOneToken = words.length === 1;
  return (
    <section className={className}>
      <div>
        {words.map((word, index) => (
          <DisplayText key={index} isOneToken={isOneToken}>
            {word}
          </DisplayText>
        ))}
      </div>
    </section>
  );
};

export default styled(LowDown)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

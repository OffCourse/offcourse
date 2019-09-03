/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { formatTitle } from "../helpers";
import { IStylable, IMessage } from "@offcourse/interfaces";
import { messageStyles, basicMessageStyles } from "./styles";

type MessageProps = IMessage & Pick<IStylable, "isBasic">;

const Message: FunctionComponent<MessageProps> = ({ children, isBasic }) => {
  return (
    <div sx={isBasic ? basicMessageStyles : messageStyles}>
      {formatTitle(children)}
    </div>
  );
};

export default Message;

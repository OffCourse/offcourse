/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { formatTitle } from "../helpers";
import { IStylable, IThemeable, IMessage } from "@offcourse/interfaces";
import { messageStyles, basicMessageStyles } from "./styles";

type MessageProps = IMessage & IThemeable & Pick<IStylable, "isBasic">;

const Message: FunctionComponent<MessageProps> = ({
  children,
  isBasic,
  className
}) => {
  return (
    <div
      className={className}
      sx={isBasic ? basicMessageStyles : messageStyles}
    >
      {formatTitle(children)}
    </div>
  );
};

export default Message;

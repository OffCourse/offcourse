/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box } from "theme-ui";
import { formatTitle } from "../helpers";
import { IStylable, IThemeable, IMessage } from "@offcourse/interfaces/src";
import { messageStyles, basicMessageStyles } from "./styles";

type MessageProps = IMessage & IThemeable & Pick<IStylable, "isBasic">;

const Message: FunctionComponent<MessageProps> = ({
  children,
  isBasic,
  className
}) => {
  return (
    <Box
      className={className}
      sx={isBasic ? basicMessageStyles : messageStyles}
    >
      {formatTitle(children)}
    </Box>
  );
};

export default Message;

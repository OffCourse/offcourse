/** @jsx jsx */
import { FunctionComponent } from "react";
import { IStylable, IThemeable, IMessage } from "@offcourse/interfaces/src";
declare type MessageProps = IMessage & IThemeable & Pick<IStylable, "isBasic">;
declare const Message: FunctionComponent<MessageProps>;
export default Message;

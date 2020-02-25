/** @jsx jsx */
import { FunctionComponent } from "react";
import { IStylable, IThemeable, Message } from "@offcourse/interfaces/src";
declare type MessageProps = Message & IThemeable & Pick<IStylable, "isBasic">;
declare const Message: FunctionComponent<MessageProps>;
export default Message;

import { ILink, IText, IButton } from "./primitives";

export type Link = ILink & {
  title: string;
};

export type Tab = IText & ILink;

export type Text = {
  html?: string;
  children?: string | string[];
};

export type Label = IText & {
  htmlFor?: string;
};

export type Message = IText;

export type Button = IText &
  IButton & {
    type?: "submit" | "button";
    disabled?: boolean;
  };

export type Heading = IText;

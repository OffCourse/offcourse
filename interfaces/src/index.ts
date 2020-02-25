import { IThemeable } from "./theme";
import { IInput, IInputField } from "./form";
import { ILink, IText, IButton } from "./primitives";
import { Label, Link, Tab, Text, Message, Button, Heading } from "./components";
import { IProject, IStep } from "./pageSection";
import { IPageData, HeaderData } from "./pages";

export interface IPublishable {
  publishable: boolean;
}

export interface IIndexable {
  index: number;
}

export interface IMeasurable {
  width?: number;
  left?: number;
  clientWidth?: number;
  clientHeight?: number;
  top?: number;
  height?: number;
}

export interface IStylable {
  backdropPath?: string;
  primaryColor?: string;
  secondaryColor?: string;
  isVisible?: boolean;
  isBasic?: boolean;
}

export {
  IInput,
  IInputField,
  IPageData,
  IProject,
  IStep,
  Text,
  Link,
  HeaderData,
  ILink,
  IText,
  IButton,
  IThemeable,
  Label,
  Tab,
  Message,
  Button,
  Heading
};

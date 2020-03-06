import { IThemeable } from "./theme";
import { IInput, IInputField } from "./form";
import { ILink, IText, IButton } from "./primitives";
import { Label, Link, Tab, Text, Message, Button, Heading } from "./components";
import { IProject, IStep, IContactInfo } from "./pageSection";
import { IPageData, HeaderData } from "./pages";
import { AppContext, AppEvent, AppState } from "./machine";
import {
  AnimatedCanvasProps,
  ICanvasProps,
  IShapeProps,
  Shape,
  GridCell
} from "./canvas";

export interface IPublishable {
  publishable: boolean;
}

export interface IIndexable {
  index: number;
}

export interface IDimensions {
  width?: number;
  height?: number;
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
  AppEvent,
  AppContext,
  AppState,
  AnimatedCanvasProps,
  ICanvasProps,
  IContactInfo,
  IInput,
  IInputField,
  IPageData,
  IProject,
  IStep,
  Text,
  GridCell,
  Link,
  HeaderData,
  ILink,
  IText,
  IButton,
  IShapeProps,
  IThemeable,
  Label,
  Shape,
  Tab,
  Message,
  Button,
  Heading
};

/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading } from "theme-ui";
import { avatarStyles } from "./styles";
import { IThemeable, IButton } from "@offcourse/interfaces/src";

type AvatarProps = IButton & IThemeable;

const Avatar: FunctionComponent<AvatarProps> = ({ className, onClick }) => {
  return (
    <Heading onClick={onClick} sx={avatarStyles} className={className}>
      _
    </Heading>
  );
};

export default Avatar;

/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Heading } from "theme-ui";
import { avatarStyles } from "./styles";
import { IThemeable } from "@offcourse/interfaces/src";

type LogoProps = { onClick: () => void } & IThemeable;

const Logo: FunctionComponent<LogoProps> = ({ className, onClick }) => {
  return (
    <Heading onClick={onClick} sx={avatarStyles} className={className}>
      _
    </Heading>
  );
};

export default Logo;

/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx, Box, Heading } from "theme-ui";
import { IThemeable } from "@offcourse/interfaces/src";
import { Text } from "@offcourse/atoms";
import { titleStyles } from "./styles";

interface ITextSection {
  title: string;
  description: string;
}

type TextColumnProps = ITextSection & IThemeable;

const TextSection: FunctionComponent<TextColumnProps> = ({
  title,
  className,
  description
}) => {
  return (
    <Box className={className}>
      <Heading sx={titleStyles}>{title}</Heading>
      <Text html={description} />
    </Box>
  );
};
export default TextSection;

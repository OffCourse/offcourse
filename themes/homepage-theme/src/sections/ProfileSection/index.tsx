/** @jsx jsx */
import { FunctionComponent } from "react";
import { Styled, jsx } from "theme-ui";
import { IBaseSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces";
import Text from "../../components/Text";
import DisplayText from "../../components/DisplayText";
import BaseSection from "../BaseSection";
import { wrapperStyles, columnStyles, titleStyles } from "./styles";

type ProfileSectionProps = IBaseSection & {
  title: string;
  description: string;
} & IThemeable;

const gridColumns = ["1/4", "4/7", "7/10"];

const ProfileSection: FunctionComponent<ProfileSectionProps> = ({
  className,
  title,
  description,
  skills,
  ...props
}) => {
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      {skills.map(({ title, description }, index) => (
        <div key={index} sx={columnStyles}>
          <h2 sx={titleStyles}>{title}</h2>
          <Text html={description} />
        </div>
      ))}
    </BaseSection>
  );
};

export default ProfileSection;

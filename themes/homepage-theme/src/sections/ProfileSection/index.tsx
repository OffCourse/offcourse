/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IProfileSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import { TextSection } from "@offcourse/molecules";
import BaseSection from "../BaseSection";
import { wrapperStyles, columnStyles } from "./styles";

type ProfileSectionProps = IProfileSection & IThemeable;

const ProfileSection: FunctionComponent<ProfileSectionProps> = ({
  className,
  skills,
  ...props
}) => {
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      {skills.map((skill, index) => (
        <TextSection {...skill} sx={columnStyles} key={index} />
      ))}
    </BaseSection>
  );
};

export default ProfileSection;

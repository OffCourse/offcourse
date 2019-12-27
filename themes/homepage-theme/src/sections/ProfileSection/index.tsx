/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { IProfileSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import Text from "../../components/Text";
import BaseSection from "../BaseSection";
import { wrapperStyles, columnStyles, titleStyles } from "./styles";

type ProfileSectionProps = IProfileSection & IThemeable;

const ProfileSection: FunctionComponent<ProfileSectionProps> = ({
  className,
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

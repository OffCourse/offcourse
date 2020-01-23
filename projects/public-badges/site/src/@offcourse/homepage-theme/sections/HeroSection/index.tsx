/** @jsx jsx */
import { FunctionComponent, useEffect} from "react";
import { jsx } from "theme-ui";
import { IHeroSection } from "@offcourse/interfaces/src/pageSection";
import { IThemeable } from "@offcourse/interfaces/src";
import DisplayText from "@offcourse/homepage-theme/src/components/DisplayText";
import BaseSection from "@offcourse/homepage-theme/src/sections/BaseSection";
import Text from "@offcourse/homepage-theme/src/components/Text";
import {
  wrapperStyles,
  textStyles,
  logoContainerStyles
} from "./styles";

import {
  defineCustomElements,
  JSX as LocalJSX
} from "@offcourse/public-badges-drawer/loader";
import { DetailedHTMLProps, HTMLAttributes } from "react";

type StencilProps<T> = {
  [P in keyof T]?: Omit<T[P], "ref"> | HTMLAttributes<T>;
};

type ReactProps<T> = {
  [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<
  T = LocalJSX.IntrinsicElements,
  U = HTMLElementTagNameMap
> = StencilProps<T> & ReactProps<U>;

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilToReact {}
  }
}

const PublicBadgesDrawer: FunctionComponent = () => {
  useEffect(() => {
    defineCustomElements(window);
  }, []);
  return <publicbadges-drawer badge-theme="light" modal-theme="dark" />;
};

type HeroSectionProps = IHeroSection & IThemeable;

const HeroSection: FunctionComponent<HeroSectionProps> = ({
  title,
  className,
  description,
  ...props
}) => {
  return (
    <BaseSection {...props} className={className} sx={wrapperStyles}>
      <div sx={textStyles}>
        <DisplayText sx={{fontFamily: "body"}}>{title}</DisplayText>
        <Text html={ description }/>
      </div>
      <div sx={logoContainerStyles}>
        <PublicBadgesDrawer/>
      </div>
    </BaseSection>
  );
};

export default HeroSection;

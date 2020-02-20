/** @jsx jsx */
import { jsx } from "theme-ui";
import {
  defineCustomElements,
  JSX as LocalJSX
} from "@offcourse/public-badges-drawer/loader";
import {
  FunctionComponent,
  useEffect,
  DetailedHTMLProps,
  HTMLAttributes
} from "react";

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
interface IPublicBadgesDrawerProp {
  badgeColor?: string;
  modalTheme?: "light" | "dark";
}

const PublicBadgesDrawer: FunctionComponent<IPublicBadgesDrawerProp> = ({
  badgeColor = "white",
  modalTheme = "light"
}) => {
  // tslint:disable-next-line
  const inBrowser = typeof window !== `undefined` ? true : null;
  useEffect(() => {
    // tslint:disable-next-line
    inBrowser && defineCustomElements(window);
  }, [inBrowser]);
  return (
    <publicbadges-drawer
      domain-name={"https://offcourse-studio.com/"}
      badge-color={badgeColor}
      modal-theme={modalTheme}
    />
  );
};

export default PublicBadgesDrawer;

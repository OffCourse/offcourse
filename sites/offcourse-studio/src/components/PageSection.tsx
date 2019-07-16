import React from "react";
import { Size } from "@offcourse/enums";

interface IPageSection {
  className?: string;
  text: string;
  role: string;
}

const PageSection = ({ text, className }: IPageSection) => (
  <div className={className}>
    <p size={Size.EXTRA_LARGE}>{text}</p>
  </div>
);

/* export default styled(PageSection)`
 *   display: grid;
 *   justify-content: center;
 *   align-items: center;
 *   height: 70vh;
 *   background-color: ${({ theme }) => theme.grayScale[0]};
 *   color: ${({ theme }) => theme.grayScale[2]};
 *   &:nth-child(even) {
 *     background-color: ${({ theme }) => theme.grayScale[3]};
 *     color: ${({ theme }) => theme.grayScale[0]};
 *   }
 * `; */

export default PageSection;

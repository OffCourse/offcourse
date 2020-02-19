/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable } from "@offcourse/interfaces/src";
import { IStep } from "@offcourse/interfaces/src/pageSection";
declare type StepProps = IStep & {
    as?: any;
} & IThemeable;
declare const Step: FunctionComponent<StepProps>;
export default Step;

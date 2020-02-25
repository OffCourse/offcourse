/** @jsx jsx */
import { FunctionComponent } from "react";
import { IThemeable, IStep } from "@offcourse/interfaces/src";
declare type StepProps = IStep & IThemeable;
declare const Step: FunctionComponent<StepProps>;
export default Step;

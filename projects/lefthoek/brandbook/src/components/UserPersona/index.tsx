/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { DataSection } from "./DataSection";
import { userPersonaStyles } from "./styles";

type Personalia = {
  name: string;
  gender: "male" | "female" | "other";
  age: number;
  education: string;
};

type Company = {
  name: string;
  numberOfEmployees: number;
  yearlyRevenue: string;
  location: string;
};

type Information = {
  needs: string;
  channels: string[];
};

export interface UserPersona {
  personalia: Personalia;
  company: Company;
  motivation: string[];
  information: Information;
  values: string[];
  responsibilities: string;
}

export const UserPersona: FunctionComponent<UserPersona> = ({
  personalia,
  company,
  motivation,
  information,
  values,
  responsibilities,
}) => {
  return (
    <div sx={userPersonaStyles}>
      <DataSection title="personalia" data={personalia} />
      <DataSection title="company" data={company} />
      <DataSection title="motivation" data={motivation} />
      <DataSection title="information" data={information} />
      <DataSection title="values" data={values} />
      <DataSection title="responsibilities" data={responsibilities} />
    </div>
  );
};

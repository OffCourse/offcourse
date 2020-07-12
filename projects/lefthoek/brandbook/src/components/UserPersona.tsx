/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { DataSection } from "./DataSection";

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

type Persona = {
  personalia: Personalia;
  company: Company;
  motivation: string[];
  values: string[];
  responsibilities: string;
};

export interface UserPersonaProps {
  /**
   * Set this to change alert kind
   * @default info
   */
  data: Persona;
}

export const UserPersona: FunctionComponent<UserPersonaProps> = ({ data }) => {
  return (
    <div
      sx={{
        maxWidth: "22rem",
          p: "1rem",
        boxShadow: "13px 10px 23px 0px rgba(230,225,230,1)",
      }}
    >
      {Object.entries(data).map(([k, v]) => {
        return <DataSection title={k} data={v} />;
      })}
    </div>
  );
};

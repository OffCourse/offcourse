/** @jsx jsx */
import { FunctionComponent } from "react";
import { jsx } from "theme-ui";
import { DataSection } from "./DataSection";
import { Card } from "../Card";
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
    <Card sx={userPersonaStyles}>
      <DataSection title="personalia" data={personalia} />
      <DataSection title="company" data={company} />
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          gridColumn: "3/4",
          gridRow: "1/4",
          justifyContent: "space-around",
        }}
      >
        <DataSection title="motivation" data={motivation} />
        <DataSection title="values" data={values} />
      </div>
      <DataSection
        sx={{ gridColumn: "1 / 3" }}
        title="information"
        data={information}
      />
      <DataSection
        sx={{ gridColumn: "1 / 3" }}
        title="responsibilities"
        data={responsibilities}
      />
    </Card>
  );
};

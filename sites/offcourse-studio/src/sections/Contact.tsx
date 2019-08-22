import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Formik } from "formik";
import { IPageSection, IStylable } from "../interfaces";
import DisplayText from "../components/DisplayText";
import Form from "../components/Form";
import Base from "./BaseSection";

const url =
  "https://hooks.slack.com/services/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";

const Contact: FunctionComponent<IPageSection & IStylable> = ({
  title,
  role,
  backdropPath = "./CellularAutomata",
  callToAction,
  form,
  className
}) => {
  const initialValues = form.reduce(
    (acc, { name, value }) => ({ ...acc, [name]: value }),
    {}
  );
  return (
    <Base role={role} className={className} backdropPath={backdropPath}>
      <DisplayText>{title}</DisplayText>
      <Formik
        initialValues={initialValues}
        onSubmit={async values => {
          const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify({ text: JSON.stringify(values, null, 2) })
          });
          console.log(res);
        }}
      >
        {({ values, handleSubmit, handleChange }) => {
          return (
            <Form
              callToAction={callToAction}
              formFields={form}
              values={values}
              onChange={handleChange}
              onSubmit={handleSubmit}
            />
          );
        }}
      </Formik>
    </Base>
  );
};

export default styled(Contact)`
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.colors.blue};

  ${DisplayText} {
    padding: 1rem;
  }
  ${Form} {
    background-color: ${({ theme }) => theme.grayScale[0]};
    padding: 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;

    ${DisplayText} {
      grid-column: 1 / 2;
      align-self: center;
      grid-row: 1 / 2;
    }
    ${Form} {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      padding: 2rem 3rem;
    }
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[3]}) {
    grid-template-rows: 1fr;
    ${DisplayText} {
      grid-column: 1 / 2;
      grid-row: 1 / 2;
    }
    ${Form} {
      grid-row: 1 / 2;
      padding: 2rem 4rem;
    }
  }
`;

import React, { FunctionComponent } from "react";
import styled from "@emotion/styled";
import { Formik } from "formik";
import { IPageSection, IStylable } from "../interfaces";
import DisplayText from "../components/DisplayText";
import Form from "../components/Form";
import Base from "./BaseSection";

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
      <Formik initialValues={initialValues} onSubmit={x => console.log(x)}>
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
  background-color: ${({ theme }) => theme.grayScale[1]};

  ${DisplayText} {
    background-color: ${({ theme }) => theme.grayScale[1]};
    padding: 1rem;
  }
  ${Form} {
    background-color: ${({ theme }) => theme.grayScale[0]};
    padding: 1rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    grid-template-columns: 1fr 40rem;
    grid-template-rows: 1fr;

    ${DisplayText} {
      grid-column: 1 / 2;
      align-self: center;
      max-width: 40rem;
      grid-row: 1 / 2;
    }
    ${Form} {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
      justify-self: end;
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

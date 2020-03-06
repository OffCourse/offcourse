import { FormikValues, FormikBag } from "formik";

const url =
  "https://v5s4r3b7s6.execute-api.us-east-1.amazonaws.com/dev/contact";

const submitForm = async (
  values: FormikValues,
  { resetForm }: FormikBag<never, FormikValues>
) => {
  await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      formData: JSON.stringify(values, null, 2),
      origin: window.location.host
    })
  });
  return resetForm();
};

export { submitForm };

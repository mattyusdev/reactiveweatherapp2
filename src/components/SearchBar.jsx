import React from "react";
import {
  SearchFrame,
  SearchForm,
  CustomTextField,
} from "../styles/globals/searchBarStyles";
import { PrimaryButton } from "../styles/globals/buttonStyles";
import * as Yup from "yup";
import { Formik, Field } from "formik";
import { onlyEnglishRegex } from "../utils/regex";

const validationSchema = Yup.object({
  text: Yup.string()
    .required("Search is required.")
    .matches(onlyEnglishRegex, "Only English letters are allowed.")
    .min(3, "Search must be atleast 3 characters."),
});

export default function SearchBar({ text, history }) {
  const initialFormValue = {
    text: text ? text : "",
  };

  const submitHandler = (values) => {
    history.push(`/search/${values.text}`);
  };

  return (
    <SearchFrame>
      <Formik
        initialValues={initialFormValue}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <SearchForm>
            <Field
              as={CustomTextField}
              label="Search..."
              name="text"
              error={errors.text && touched.text ? true : false}
              helperText={errors.text && touched.text ? errors.text : null}
            />

            <PrimaryButton
              type="submit"
              variant="contained"
              disableElevation
              primary={true}
            >
              GO
            </PrimaryButton>
          </SearchForm>
        )}
      </Formik>
    </SearchFrame>
  );
}

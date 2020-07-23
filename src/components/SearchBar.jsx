import React from "react";
import {
  SearchFrame,
  SearchForm,
  CustomTextField,
  SearchAutoCompleteFrame,
} from "../styles/globals/searchBarStyles";
import { PrimaryButton } from "../styles/globals/buttonStyles";
import { Formik, Field } from "formik";
import { validationSchema } from "../utils/validation";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { searchCityAutoCompleteHandler } from "../redux/actions/asyncActions";
import {
  setCurrentCity,
  closeAutoSearch,
  openAutoSearch,
} from "../redux/actions/actions";

export default function SearchBar({ text, history, includeAutoSearch }) {
  const dispatch = useDispatch();
  const { searchResults, isAutoSearchOpen } = useSelector((state) => state);
  const initialFormValue = {
    text: text ? text : "",
  };

  const submitHandler = (values) => {
    history.push(`/search/${values.text}`);
  };

  const autoSearchResultClickHandler = (data) => {
    const cityData = {
      key: data.Key,
      name: data.LocalizedName,
      ID: data.AdministrativeArea.ID,
      country: data.Country.LocalizedName,
    };

    dispatch(setCurrentCity(cityData));
    dispatch(closeAutoSearch());
  };

  const onBlurHandler = () => {
    if (includeAutoSearch) {
      dispatch(closeAutoSearch());
    }
  };

  const onFocusHandler = async (text) => {
    if (includeAutoSearch) {
      try {
        await validationSchema.validate({ text });
        dispatch(openAutoSearch());
      } catch (err) {
        if (isAutoSearchOpen) {
          dispatch(closeAutoSearch());
        }
      }
    }
  };

  const onKeyUpHandler = (text) => {
    if (includeAutoSearch) {
      dispatch(searchCityAutoCompleteHandler(text));
    }
  };

  return (
    <SearchFrame>
      <Formik
        initialValues={initialFormValue}
        onSubmit={submitHandler}
        validationSchema={validationSchema}
      >
        {({ errors, touched, values }) => (
          <SearchForm>
            <Field
              onBlur={onBlurHandler}
              onFocus={() => onFocusHandler(values.text)}
              onKeyUp={() => onKeyUpHandler(values.text)}
              as={CustomTextField}
              label="Search..."
              name="text"
              autoComplete="off"
              error={errors.text && touched.text ? true : false}
              helperText={errors.text && touched.text ? errors.text : null}
            />

            {includeAutoSearch && (
              <SearchAutoCompleteFrame open={isAutoSearchOpen}>
                <List>
                  <List>
                    {searchResults.length ? (
                      searchResults.map((res) => (
                        <ListItem
                          key={res.Key}
                          button
                          onMouseDown={() => autoSearchResultClickHandler(res)}
                        >
                          <ListItemText
                            primary={res.LocalizedName}
                            secondary={`${
                              res.Country && res.Country.LocalizedName
                            }, ${
                              res.AdministrativeArea &&
                              res.AdministrativeArea.LocalizedName
                            }`}
                          />
                        </ListItem>
                      ))
                    ) : (
                      <ListItem>
                        <ListItemText secondary="No results found." />
                      </ListItem>
                    )}
                  </List>
                </List>
              </SearchAutoCompleteFrame>
            )}

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

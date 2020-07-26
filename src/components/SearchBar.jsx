import React from "react";
import {
  SearchFrame,
  CustomTextField,
} from "../styles/globals/searchBarStyles";

import { useDispatch, useSelector } from "react-redux";
import { autoCompleteSearch } from "../redux/actions/asyncActions";
import { setCurrentCity } from "../redux/actions/actions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { validationSchema } from "../utils/validation";
import { useState } from "react";
import { CircularProgress } from "@material-ui/core";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { searchResults, loading } = useSelector((state) => state.search);
  const [validation, setValidation] = useState({
    error: false,
    errorMessage: "",
  });
  const [isAutoSearchOpen, setIsAutoSearchOpen] = useState(false);

  const autoCompleteSearchChangeHandler = (result) => {
    if (result.LocalizedName) {
      const cityData = {
        key: result.Key,
        name: result.LocalizedName,
        ID: result.AdministrativeArea.ID,
        country: result.Country.LocalizedName,
      };

      dispatch(setCurrentCity(cityData));
    }
  };

  const autoCompleteSearchKeyUpHandler = async (text, key) => {
    if (key !== 38 && key !== 40 && key !== 13) {
      try {
        await validationSchema.validate({ text });
        setValidation({ error: false, errorMessage: "" });
        dispatch(autoCompleteSearch(text));
      } catch (err) {
        setValidation({ error: true, errorMessage: err.message });
      }
    }
  };

  return (
    <SearchFrame>
      <Autocomplete
        open={isAutoSearchOpen}
        onOpen={() => setIsAutoSearchOpen(true)}
        onClose={() => setIsAutoSearchOpen(false)}
        onChange={(e, result) => autoCompleteSearchChangeHandler(result)}
        getOptionSelected={(option, value) => option.Key === value.Key}
        getOptionLabel={(option) =>
          option.LocalizedName ? option.LocalizedName : option
        }
        options={searchResults}
        disableClearable={true}
        clearOnBlur={false}
        freeSolo
        renderInput={(params) => (
          <CustomTextField
            {...params}
            onKeyUp={(e) => {
              autoCompleteSearchKeyUpHandler(e.target.value, e.which);
            }}
            label="Search city..."
            name="text"
            autoComplete="off"
            error={validation.error}
            helperText={validation.errorMessage}
            InputProps={{
              ...params.InputProps,
              endAdornment: loading ? (
                <>
                  <CircularProgress color="secondary" size={20} />
                  {params.InputProps.endAdornment}
                </>
              ) : null,
            }}
          />
        )}
        renderOption={(option) => (
          <div>
            <span>{option.LocalizedName}</span>
            <p>{`${option.Country && option.Country.LocalizedName}, ${
              option.AdministrativeArea &&
              option.AdministrativeArea.LocalizedName
            }`}</p>
          </div>
        )}
      />
    </SearchFrame>
  );
}

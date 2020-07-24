import React from "react";
import {
  SearchFrame,
  CustomTextField,
} from "../styles/globals/searchBarStyles";

import { useDispatch, useSelector } from "react-redux";
import { searchCityAutoCompleteHandler } from "../redux/actions/asyncActions";
import {
  setCurrentCity,
  closeAutoSearch,
  openAutoSearch,
} from "../redux/actions/actions";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { validationSchema } from "../utils/validation";
import { useState } from "react";
import PuffLoader from "react-spinners/PuffLoader";
import { CircularProgress } from "@material-ui/core";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { searchResults, isAutoSearchOpen, loading } = useSelector(
    (state) => state.search
  );
  const [validation, setValidation] = useState({
    error: false,
    errorMessage: "",
  });

  const autoSearchChangeHandler = (result) => {
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

  const autoSearchKeyUpHandler = async (text, key) => {
    //prevent up and down arrows keys
    if (key !== 38 && key !== 40) {
      try {
        await validationSchema.validate({ text });
        setValidation({ error: false, errorMessage: "" });
        dispatch(searchCityAutoCompleteHandler(text));
      } catch (err) {
        setValidation({ error: true, errorMessage: err.message });
      }
    }
  };

  return (
    <SearchFrame>
      <Autocomplete
        open={isAutoSearchOpen}
        onOpen={() => dispatch(openAutoSearch())}
        onClose={() => dispatch(closeAutoSearch())}
        onChange={(e, result) => autoSearchChangeHandler(result)}
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
              autoSearchKeyUpHandler(e.target.value, e.which);
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

import React, { useState } from "react";
import { SearchFrame, SearchForm } from "../styles/globals/searchBarStyles";
import { TextField } from "@material-ui/core";
import { PrimaryButton } from "../styles/globals/buttonStyles";

export default function SearchBar({ text, history }) {
  const [formData, setFormData] = useState(text ? text : "");

  const submitHandler = (e) => {
    e.preventDefault();
    history.push(`/search/${formData}`);
  };

  return (
    <SearchFrame>
      <SearchForm onSubmit={(e) => submitHandler(e)}>
        <TextField
          label="Search..."
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />

        <PrimaryButton
          type="submit"
          variant="contained"
          disableElevation
          color="secondary"
        >
          GO
        </PrimaryButton>
      </SearchForm>
    </SearchFrame>
  );
}

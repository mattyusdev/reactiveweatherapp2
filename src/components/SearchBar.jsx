import React, { useState } from "react";
import { SearchFrame, SearchForm } from "../styles/homeStyles";
import { TextField, Button } from "@material-ui/core";

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

        <Button
          type="submit"
          variant="contained"
          disableElevation
          color="secondary"
        >
          GO
        </Button>
      </SearchForm>
    </SearchFrame>
  );
}

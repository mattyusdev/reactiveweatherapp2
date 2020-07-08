import React, { useEffect } from "react";
import SearchBar from "../SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { searchCity } from "../../redux/asyncActions";
import SearchResults from "./SearchResults";
import { CircularProgress } from "@material-ui/core";
import { CurrentMain } from "../../styles/pages/homeStyles";

export default function Search({ match, history }) {
  const { searchResults, fetch } = useSelector((state) => state);
  const searchText = match.params.text;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCity(searchText));
  }, []);

  return (
    <div>
      <SearchBar text={searchText} history={history} />
      <CurrentMain>
        {fetch.loading ? (
          <CircularProgress color="secondary" />
        ) : !fetch.error ? (
          <SearchResults results={searchResults} history={history} />
        ) : (
          <h1>Error! please try again later.</h1>
        )}
      </CurrentMain>
    </div>
  );
}

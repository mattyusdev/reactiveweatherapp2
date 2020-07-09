import React, { useEffect } from "react";
import SearchBar from "../SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { searchCity } from "../../redux/asyncActions";
import SearchResults from "./SearchResults";
import { SearchMain } from "../../styles/pages/searchStyles";
import { onlyEnglishRegex } from "../../utils/regex";
import { fetchFailed } from "../../redux/actions";
import BarLoader from "react-spinners/BarLoader";
import {
  SearchNoResults,
  ErrorMessage,
} from "../../styles/globals/errorStyles";
import { Helmet } from "react-helmet-async";

export default function Search({ match, history }) {
  const { searchResults, fetch } = useSelector((state) => state);
  const searchText = match.params.text;
  const dispatch = useDispatch();

  useEffect(() => {
    if (onlyEnglishRegex.test(searchText)) {
      dispatch(searchCity(searchText));
    } else {
      dispatch(fetchFailed());
    }
  }, [searchText]);

  return (
    <div>
      <Helmet>
        <title>WeatherApp | Search</title>
      </Helmet>

      <SearchBar text={searchText} history={history} />
      <SearchMain>
        {fetch.loading ? (
          <BarLoader color="#f50057" width={150} />
        ) : !fetch.error ? (
          searchResults.length ? (
            <SearchResults results={searchResults} history={history} />
          ) : (
            <SearchNoResults />
          )
        ) : (
          <ErrorMessage />
        )}
      </SearchMain>
    </div>
  );
}

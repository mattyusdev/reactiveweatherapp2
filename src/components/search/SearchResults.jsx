import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { SearchResultsFrame } from "../../styles/pages/searchStyles";
import { useDispatch } from "react-redux";
import { setCurrentCity } from "../../redux/actions";

export default function SearchResults({ results, history }) {
  const dispatch = useDispatch();

  const clickHandler = (data) => {
    const cityData = {
      key: data.Key,
      name: data.LocalizedName,
      ID: data.AdministrativeArea.ID,
    };

    dispatch(setCurrentCity(cityData));

    history.push("/");
  };

  return (
    <SearchResultsFrame>
      <List aria-label="secondary mailbox folders">
        {results.map((res) => (
          <ListItem button onClick={() => clickHandler(res)}>
            <ListItemText
              primary={res.LocalizedName}
              secondary={`${res.Country && res.Country.LocalizedName}, ${
                res.AdministrativeArea && res.AdministrativeArea.LocalizedName
              }`}
            />
          </ListItem>
        ))}
      </List>
    </SearchResultsFrame>
  );
}

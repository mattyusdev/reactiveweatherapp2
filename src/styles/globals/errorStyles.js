import React from "react";
import styled, { css } from "styled-components";

const ErrorMessageStyle = styled.h1`
  text-align: center;

  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.primaryText};
    `}

  ${(props) =>
    props.isFavorite &&
    css`
      color: #fff;
    `}
`;

export const ErrorMessage = (props) => (
  <ErrorMessageStyle {...props}>
    Error! please try again later .
  </ErrorMessageStyle>
);

const SearchNoResultsStyle = styled.h1`
  text-align: center;

  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.primaryText};
    `}
`;

export const SearchNoResults = (props) => (
  <SearchNoResultsStyle {...props}>
    No results found, try again.
  </SearchNoResultsStyle>
);

const FavoritesIsEmptyStyle = styled.h1`
  text-align: center;
  width: 100%;

  ${(props) =>
    props.theme &&
    css`
      color: ${props.theme.primaryText};
    `}
`;

export const FavoritesIsEmpty = (props) => (
  <FavoritesIsEmptyStyle {...props}>
    You haven't selected any favorites .
  </FavoritesIsEmptyStyle>
);

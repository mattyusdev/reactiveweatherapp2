import React from "react";
import FavoriteCurrentHeader from "./FavoriteCurrentHeader";
import {
  FavoritesMain,
  FavoritesTitle,
} from "../../styles/pages/favoritesStyles";
import { useSelector } from "react-redux";
import { FavoritesIsEmpty } from "../../styles/globals/errorStyles";
import { Helmet } from "react-helmet-async";

export default function Favorites({ history }) {
  const { favoriteCities } = useSelector((state) => state);

  return (
    <>
      <Helmet>
        <title>WeatherApp | Favorites</title>
      </Helmet>

      <FavoritesTitle>
        Favorites <span>❤</span>
      </FavoritesTitle>

      <FavoritesMain>
        {favoriteCities.length ? (
          favoriteCities.map((city) => (
            <FavoriteCurrentHeader
              key={city.key}
              data={city}
              history={history}
            />
          ))
        ) : (
          <FavoritesIsEmpty />
        )}
      </FavoritesMain>
    </>
  );
}

import React from "react";
import FavoriteCurrentHeader from "./FavoriteCurrentHeader";
import {
  FavoritesMain,
  FavoritesTitle,
} from "../../styles/pages/favoritesStyles";
import { useSelector } from "react-redux";

export default function Favorites({ history }) {
  const { favoriteCities } = useSelector((state) => state);

  return (
    <>
      <FavoritesTitle>
        Favorites <span>❤</span>
      </FavoritesTitle>

      <FavoritesMain>
        {favoriteCities.map((city) => (
          <FavoriteCurrentHeader data={city} history={history} />
        ))}
      </FavoritesMain>
    </>
  );
}

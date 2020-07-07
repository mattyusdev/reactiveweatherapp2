import React from "react";
import FavoriteCard from "./FavoriteCard";
import { FavoritesMain } from "../../styles/favoritesStyles";
import { useSelector } from "react-redux";

export default function Favorites({ history }) {
  const { favoriteCities } = useSelector((state) => state);

  return (
    <FavoritesMain>
      {favoriteCities.map((city) => (
        <FavoriteCard data={city} history={history} />
      ))}
    </FavoritesMain>
  );
}

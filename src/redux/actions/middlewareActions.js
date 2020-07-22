import {
  setAllFavorites,
  changeTheme,
  changeUnit,
  removeFromFavorites,
  addToFavorites,
} from "./actions";

export const getLocalFavorites = () => {
  return (dispatch) => {
    const localFavorites = JSON.parse(localStorage.getItem("favorites"));

    if (localFavorites) {
      dispatch(setAllFavorites(localFavorites));
    }
  };
};

export const favoritesHandler = (cityData, isInFavorites) => {
  return (dispatch, getState) => {
    const { favoriteCities } = getState();
    if (isInFavorites) {
      dispatch(removeFromFavorites(cityData.key));
      localStorage.setItem(
        "favorites",
        JSON.stringify(
          favoriteCities.filter((city) => city.key !== cityData.key)
        )
      );
    } else {
      dispatch(addToFavorites(cityData));
      localStorage.setItem(
        "favorites",
        JSON.stringify([...favoriteCities, cityData])
      );
    }
  };
};

export const getLocalTheme = () => {
  return (dispatch) => {
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      dispatch(changeTheme());
    }
  };
};

export const themeHandler = () => {
  return (dispatch, getState) => {
    const { theme } = getState();

    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
    dispatch(changeTheme());
  };
};

export const getLocalUnit = () => {
  return (dispatch) => {
    const localUnit = localStorage.getItem("unit");

    if (localUnit) {
      dispatch(changeUnit());
    }
  };
};

export const unitHandler = () => {
  return (dispatch, getState) => {
    const { unit } = getState();

    if (unit === "c") {
      localStorage.setItem("unit", "f");
    } else {
      localStorage.removeItem("unit");
    }
    dispatch(changeUnit());
  };
};

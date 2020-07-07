import React, { useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { CardActions, Button, CircularProgress } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { getCurrentFavoriteCityData } from "../../redux/asyncActions";
import { setCurrentCity } from "../../redux/actions";

export default function FavoriteCard({ data, history }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentFavoriteCityData(data.key));
  }, []);

  const viewFavoriteClickHandler = (cityData) => {
    dispatch(setCurrentCity(cityData));

    history.push("/");
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" component="h3">
          {data.name}({data.ID})
        </Typography>

        {data.loading ? (
          <CircularProgress color="secondary" />
        ) : (
          <>
            <Typography variant="h5" component="h2">
              {data.currentWeather &&
                data.currentWeather.Temperature.Metric.Value}
              °
              {data.currentWeather &&
                data.currentWeather.Temperature.Metric.Unit}
            </Typography>
            <Typography variant="h5" component="h2">
              {data.currentWeather && data.currentWeather.WeatherText}
            </Typography>
          </>
        )}
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          disableElevation
          size="small"
          color="secondary"
          onClick={() => viewFavoriteClickHandler(data)}
        >
          VIEW
        </Button>
      </CardActions>
    </Card>
  );
}

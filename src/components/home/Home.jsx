import React from "react";
import {
  SearchFrame,
  SearchForm,
  CurrentHeader,
  CurrentTitle,
  CurrentForecast,
  ForecastFrame,
} from "../../styles/homeStyles";
import { TextField, Button, IconButton } from "@material-ui/core";
import { AiFillHeart } from "react-icons/ai";
import ForecastCard from "./ForecastCard";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <SearchFrame>
        <SearchForm>
          <TextField label="Search..." />
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
      <CurrentHeader>
        <CurrentTitle>
          <div>
            <h3>Tel-Aviv</h3>
            <h2>38°c</h2>
          </div>

          <div>
            <IconButton color="secondary">
              <AiFillHeart />
            </IconButton>
          </div>
        </CurrentTitle>

        <CurrentForecast>Scattered Clouds</CurrentForecast>
      </CurrentHeader>
      <ForecastFrame>
        <ForecastCard />
      </ForecastFrame>
    </div>
  );
}

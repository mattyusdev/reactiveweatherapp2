import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import daysOfWeek from "../../data/daysOfWeek";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function ForecastCard({ foreCastData }) {
  const classes = useStyles();

  const { Date: ForeCastDate, Temperature, Day, Night } = foreCastData;

  const dayName = daysOfWeek[new Date(ForeCastDate).getDay()];

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h3">
          {dayName}
        </Typography>
        <Typography variant="h5" component="h2">
          {Temperature &&
            `${Temperature.Minimum.Value}°${Temperature.Minimum.Unit} - ${Temperature.Maximum.Value}°${Temperature.Maximum.Unit}`}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Day
        </Typography>
        <Typography variant="h5" component="h2">
          {Day && Day.IconPhrase}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Night
        </Typography>
        <Typography variant="h5" component="h2">
          {Night && Night.IconPhrase}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

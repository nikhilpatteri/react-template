import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import LeftFilter from './components/LeftFilter';
import MainContent from './components/MainContent';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    Developer: Nikhil Patteri
  </Typography>
);

export default function App() {
  const [state, setState] = React.useState([])
  const [landingFilter, setLandingFilter] = React.useState(undefined)
  const [launchFilter, setLaunchFilter] = React.useState(undefined)
  const [yearFilter, setYearFilter] = React.useState(undefined)

  React.useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches?limit=100')
      .then(response => response.json())
      .then(result => {
        setState(result)
      })
  }, [])

  React.useEffect(() => {
    if (yearFilter && (launchFilter !== undefined) && (landingFilter !== undefined)) {
      fetch(`https://api.spacexdata.com/v3/launches?limit=100&launch_success=${launchFilter};land_success=${landingFilter};launch_year=${yearFilter}`)
        .then(response => response.json())
        .then(result => {
          setState(result)
        })
    }
  }, [landingFilter, launchFilter, yearFilter])

  return (
    <Box pl={2} pr={2}>
      <Typography variant="h4" style={{ fontWeight: '600' }} component="h1" gutterBottom>
        SpaceX Launch Programs
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={2} lg={2}>
          <LeftFilter
            setLandingFilter={value => setLandingFilter(value)}
            setLaunchFilter={value => setLaunchFilter(value)}
            setYearFilter={value => setYearFilter(value)}
          />
        </Grid>
        <Grid item xs={12} md={10} lg={10}>
          <MainContent
            state={state}
          />
        </Grid>
      </Grid>
      <Copyright />
    </Box>
  );
}

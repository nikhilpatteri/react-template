import React from 'react'
import { Box, Button, createMuiTheme, Divider, Grid, ThemeProvider, Typography } from '@material-ui/core'
import { green } from '@material-ui/core/colors';

const yearList = [
  { id: '2006', label: 2006 },
  { id: '2007', label: 2007 },
  { id: '2008', label: 2008 },
  { id: '2009', label: 2009 },
  { id: '2010', label: 2010 },
  { id: '2011', label: 2011 },
  { id: '2012', label: 2012 },
  { id: '2013', label: 2013 },
  { id: '2014', label: 2014 },
  { id: '2015', label: 2015 },
  { id: '2016', label: 2016 },
  { id: '2017', label: 2017 },
  { id: '2018', label: 2018 },
  { id: '2019', label: 2019 },
  { id: '2020', label: 2020 },
];

const LeftFilter = ({ setYearFilter, setLaunchFilter, setLandingFilter }) => {

  const theme = createMuiTheme({
    palette: {
      primary: green,
    },
  });

  return (
    <Box bgcolor='white' padding={2}>
      <Typography variant="subtitle1">Filters</Typography>
      <br/>
      <Typography variant="subtitle2" align="center" mb={1}>Launch Year</Typography>
      <Divider/>
      <Grid container style={{marginBottom: '30px'}}>
        {yearList.map(year => (
          <Grid key={year.id} item lg={6} md={6} sm={6} xs={6} style={{marginBottom: '10px', marginTop: '10px', textAlign: 'center'}}>
            <ThemeProvider theme={theme}>
              <Button onClick={() => setYearFilter(year.label)} variant="contained" color="primary">{year.label}</Button>
            </ThemeProvider>
          </Grid>
        ))}
      </Grid>

      <Typography variant="subtitle2" align="center">Successful Launch</Typography>
      <Divider/>
      <Grid container style={{marginBottom: '30px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} style={{marginBottom: '10px', marginTop: '10px', textAlign: 'center'}}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={() => setLaunchFilter(true)}
              variant="contained"
              color="primary"
            >True</Button>
          </ThemeProvider>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6} style={{marginBottom: '10px', marginTop: '10px', textAlign: 'center'}}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={() => setLaunchFilter(false)}
              variant="contained"
              color="primary"
            >False</Button>
          </ThemeProvider>
        </Grid>
      </Grid>

      <Typography variant="subtitle2" align="center">Successful Landing</Typography>
      <Divider/>
      <Grid container style={{marginBottom: '30px'}}>
        <Grid item lg={6} md={6} sm={6} xs={6} style={{marginBottom: '10px', marginTop: '10px', textAlign: 'center'}}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={() => setLandingFilter(true)}
              variant="contained"
              color="primary"
            >True</Button>
          </ThemeProvider>
        </Grid>
        <Grid item lg={6} md={6} sm={6} xs={6} style={{marginBottom: '10px', marginTop: '10px', textAlign: 'center'}}>
          <ThemeProvider theme={theme}>
            <Button
              onClick={() => setLandingFilter(false)}
              variant="contained"
              color="primary"
            >False</Button>
          </ThemeProvider>
        </Grid>
      </Grid>
    </Box>
  )
}

export default LeftFilter
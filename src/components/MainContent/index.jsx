import { Box, Grid } from '@material-ui/core'
import React from 'react'
import FlightBox from '../FlightBox'

const MainContent = ({ state }) => (
  <Box>
    <Grid container spacing={2}>
      {state.length === 0 && <div>Loading...</div>}
      {state.map(item => (
        <Grid key={item.flight_number} item lg={3} md={3} sm={6} xs={12}>
          <FlightBox
            name={item.mission_name}
            imageUrl={item.links.mission_patch}
            flightNo={item.flight_number}
            missionId={item.mission_id}
            launchYear={item.launch_year}
            launchSuccess={item.launch_success}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
)

export default MainContent
import { Box, Link, Typography } from '@material-ui/core'
import React from 'react'

const FlightBox = ({ name, imageUrl, flightNo, missionId, launchYear, launchSuccess }) => (
  <Box padding={2} bgcolor='white' borderRadius={5}>
    <Box bgcolor='lightgray'>
      <img src={imageUrl} width='100%' alt="image" />
    </Box>
    <Link variant="button">
      {`${name} # ${flightNo}`}
    </Link>
    <Typography>
      Mission Ids: {missionId}
    </Typography>
    <Typography>
      Launch Year: {launchYear}
    </Typography>
    <Typography>
      Successful Launch: {launchSuccess.toString()}
    </Typography>
    <Typography>
      Successful Landing: {}
    </Typography>
  </Box>
)

export default FlightBox
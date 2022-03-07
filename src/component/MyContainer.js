import React from 'react'
import Container from '@material-ui/core/Container'
import { Grid, Paper } from '@material-ui/core'

function MyContainer() {
  return (
    <div>
        <Grid container spacing={5}>
          <Grid item sm={12}>
            <Paper style={{height: 75, width: 50}}/>
          </Grid>
          <Grid item sm={2}>
            <Paper style={{height: 75, width: 50}}/>
          </Grid>
          <Grid item sm={2}>
            <Paper style={{height: 75, width: 50}}/>
          </Grid>
          <Grid item sm={2}>
            <Paper style={{height: 75, width: 50}}/>
          </Grid>
          <Grid item sm={2}>
            <Paper style={{height: 75, width: 50}}/>
          </Grid>
          <Grid item sm={2}>
            <Paper style={{height: 75, width: 50}}/>
          </Grid>
          <Grid item sm={2}>
            <Paper style={{height: 75, width: 50}}/>
          </Grid>
        </Grid>
    </div>
  )
}

export default MyContainer
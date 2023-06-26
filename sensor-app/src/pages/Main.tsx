import React from 'react';
import { Grid } from '@mui/material';
import PageCard from '../components/PageCard';

const cardOptions = ["Issues", "Notifications", "Exploration", "Sensors"]

const Main = () => {
  return (
    <>
        <Grid container spacing={0} sx={{marginTop:"5em"}}>
        {cardOptions.map((cardOption:string) => {
            return (
                <Grid item xs={8}>
                    <PageCard title={cardOption}/>
                </Grid>
            )
        })}
        </Grid>
    </>
  )
}

export default Main
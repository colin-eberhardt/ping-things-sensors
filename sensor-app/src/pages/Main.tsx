import React from 'react';
import { Grid } from '@mui/material';
import PageCard from '../components/PageCard';
import PageHeader from '../components/PageHeader';

const cardOptions = ["Issues", "Notifications", "Exploration", "Sensors"]

const Main = () => {
  return (
    <>
        <PageHeader />
        <Grid container spacing={0}>
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